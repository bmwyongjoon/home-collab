// Firebase Messaging Service Worker — 백그라운드 푸시 수신
// Firebase SDK 없이 표준 Web Push API로 처리 (빌드 시 secrets 주입 불필요)

self.addEventListener('push', (event) => {
  if (!event.data) return;

  let payload = {};
  try {
    payload = event.data.json();
  } catch {
    return;
  }

  const notification = payload.notification || {};
  const title = notification.title || '함께할 일';
  const body = notification.body || '';
  const icon = notification.icon || '/home-collab/icons/icon-192.png';

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon,
      badge: '/home-collab/icons/icon-192.png',
      data: payload.data || {},
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/home-collab/'));
});
