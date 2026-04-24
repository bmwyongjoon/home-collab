import zlib from 'zlib'
import fs from 'fs'
import path from 'path'

const crcTable = new Uint32Array(256)
for (let i = 0; i < 256; i++) {
  let c = i
  for (let j = 0; j < 8; j++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1)
  crcTable[i] = c
}

function crc32(buf) {
  let crc = 0xFFFFFFFF
  for (const byte of buf) crc = crcTable[(crc ^ byte) & 0xFF] ^ (crc >>> 8)
  return (crc ^ 0xFFFFFFFF) | 0
}

function chunk(type, data) {
  const t = Buffer.from(type, 'ascii')
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length)
  const crcBuf = Buffer.alloc(4); crcBuf.writeInt32BE(crc32(Buffer.concat([t, data])))
  return Buffer.concat([len, t, data, crcBuf])
}

function createPNG(size, r, g, b) {
  const rowSize = 1 + size * 3
  const raw = Buffer.alloc(size * rowSize)
  for (let y = 0; y < size; y++) {
    raw[y * rowSize] = 0
    for (let x = 0; x < size; x++) {
      raw[y * rowSize + 1 + x * 3] = r
      raw[y * rowSize + 1 + x * 3 + 1] = g
      raw[y * rowSize + 1 + x * 3 + 2] = b
    }
  }
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4)
  ihdr[8] = 8; ihdr[9] = 2
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

const dir = path.resolve('public/icons')
fs.mkdirSync(dir, { recursive: true })
// 테마 색상 #6366f1 = rgb(99, 102, 241)
fs.writeFileSync(path.join(dir, 'icon-192.png'), createPNG(192, 99, 102, 241))
fs.writeFileSync(path.join(dir, 'icon-512.png'), createPNG(512, 99, 102, 241))
console.log('아이콘 생성 완료!')
