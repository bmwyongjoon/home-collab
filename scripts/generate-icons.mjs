import { deflateSync } from 'zlib';
import { writeFileSync, mkdirSync } from 'fs';

function crc32(data) {
  let crc = 0xffffffff;
  for (const b of data) {
    crc ^= b;
    for (let i = 0; i < 8; i++) {
      crc = (crc & 1) ? ((crc >>> 1) ^ 0xedb88320) : (crc >>> 1);
    }
  }
  return ((crc ^ 0xffffffff) >>> 0);
}

function makeChunk(type, data) {
  const t = Buffer.from(type);
  const len = Buffer.allocUnsafe(4);
  len.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.allocUnsafe(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([t, data])), 0);
  return Buffer.concat([len, t, data, crcBuf]);
}

function createPNG(size, drawFn) {
  const pixels = new Uint8Array(size * size * 4);
  drawFn(pixels, size);

  const rows = [];
  for (let y = 0; y < size; y++) {
    const row = Buffer.allocUnsafe(1 + size * 4);
    row[0] = 0;
    for (let x = 0; x < size; x++) {
      const pi = (y * size + x) * 4;
      row[1 + x * 4]     = pixels[pi];
      row[1 + x * 4 + 1] = pixels[pi + 1];
      row[1 + x * 4 + 2] = pixels[pi + 2];
      row[1 + x * 4 + 3] = pixels[pi + 3];
    }
    rows.push(row);
  }

  const raw = Buffer.concat(rows);
  const compressed = deflateSync(raw);

  const ihdr = Buffer.allocUnsafe(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    makeChunk('IHDR', ihdr),
    makeChunk('IDAT', compressed),
    makeChunk('IEND', Buffer.alloc(0)),
  ]);
}

function setPixel(pixels, size, x, y, r, g, b, a = 255) {
  if (x < 0 || x >= size || y < 0 || y >= size) return;
  const i = (y * size + x) * 4;
  const srcA = a / 255;
  const dstA = pixels[i + 3] / 255;
  const outA = srcA + dstA * (1 - srcA);
  if (outA === 0) return;
  pixels[i]     = Math.round((r * srcA + pixels[i]     * dstA * (1 - srcA)) / outA);
  pixels[i + 1] = Math.round((g * srcA + pixels[i + 1] * dstA * (1 - srcA)) / outA);
  pixels[i + 2] = Math.round((b * srcA + pixels[i + 2] * dstA * (1 - srcA)) / outA);
  pixels[i + 3] = Math.round(outA * 255);
}

function fillCircle(pixels, size, cx, cy, r, R, G, B, A = 255) {
  const x0 = Math.max(0, Math.floor(cx - r));
  const x1 = Math.min(size - 1, Math.ceil(cx + r));
  const y0 = Math.max(0, Math.floor(cy - r));
  const y1 = Math.min(size - 1, Math.ceil(cy + r));
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      if (dist <= r) setPixel(pixels, size, x, y, R, G, B, A);
    }
  }
}

function fillRect(pixels, size, x0, y0, x1, y1, R, G, B) {
  for (let y = Math.max(0, y0); y <= Math.min(size - 1, y1); y++)
    for (let x = Math.max(0, x0); x <= Math.min(size - 1, x1); x++)
      setPixel(pixels, size, x, y, R, G, B, 255);
}

function fillTriangle(pixels, size, ax, ay, bx, by, cx, cy, R, G, B) {
  const minX = Math.max(0, Math.min(ax, bx, cx));
  const maxX = Math.min(size - 1, Math.max(ax, bx, cx));
  const minY = Math.max(0, Math.min(ay, by, cy));
  const maxY = Math.min(size - 1, Math.max(ay, by, cy));
  const sign = (px, py, p1x, p1y, p2x, p2y) => (px - p2x) * (p1y - p2y) - (p1x - p2x) * (py - p2y);
  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      const d0 = sign(x, y, ax, ay, bx, by);
      const d1 = sign(x, y, bx, by, cx, cy);
      const d2 = sign(x, y, cx, cy, ax, ay);
      if (!((d0 < 0 || d1 < 0 || d2 < 0) && (d0 > 0 || d1 > 0 || d2 > 0)))
        setPixel(pixels, size, x, y, R, G, B, 255);
    }
  }
}

function drawThickLine(pixels, size, x0, y0, x1, y1, R, G, B, thickness) {
  const r = thickness / 2;
  const dx = x1 - x0, dy = y1 - y0;
  const steps = Math.ceil(Math.sqrt(dx * dx + dy * dy) * 2);
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    fillCircle(pixels, size, x0 + dx * t, y0 + dy * t, r, R, G, B, 255);
  }
}

function drawIcon(pixels, size) {
  const s = size / 192;

  // Warm orange background circle
  fillCircle(pixels, size, size / 2, size / 2, size / 2, 255, 154, 60, 255);

  // House roof (white triangle): peak at top, wide base
  fillTriangle(
    pixels, size,
    Math.round(33 * s), Math.round(106 * s),
    Math.round(96 * s), Math.round(47 * s),
    Math.round(159 * s), Math.round(106 * s),
    255, 255, 255
  );

  // House body (white rect)
  fillRect(
    pixels, size,
    Math.round(52 * s), Math.round(99 * s),
    Math.round(140 * s), Math.round(163 * s),
    255, 255, 255
  );

  // Door (background color to cut out)
  fillRect(
    pixels, size,
    Math.round(74 * s), Math.round(130 * s),
    Math.round(104 * s), Math.round(163 * s),
    255, 154, 60
  );

  // Green checkmark inside house body
  const ck = Math.round(11 * s);
  drawThickLine(pixels, size,
    Math.round(63 * s), Math.round(118 * s),
    Math.round(85 * s), Math.round(140 * s),
    34, 197, 94, ck
  );
  drawThickLine(pixels, size,
    Math.round(85 * s), Math.round(140 * s),
    Math.round(126 * s), Math.round(105 * s),
    34, 197, 94, ck
  );
}

mkdirSync('public/icons', { recursive: true });

for (const size of [192, 512]) {
  const png = createPNG(size, drawIcon);
  writeFileSync(`public/icons/icon-${size}.png`, png);
  console.log(`✓ public/icons/icon-${size}.png`);
}

const favicon = createPNG(64, drawIcon);
writeFileSync('public/favicon.png', favicon);
console.log('✓ public/favicon.png');
