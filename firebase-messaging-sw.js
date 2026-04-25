// Firebase Messaging Service Worker — 백그라운드 푸시 수신
// self.registration.scope 사용 → Netlify('/')와 GitHub Pages('/home-collab/')에서 모두 동작

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
  const scope = self.registration.scope;
  const icon = notification.icon || scope + 'icons/icon-192.png';

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon,
      badge: scope + 'icons/icon-192.png',
      data: payload.data || {},
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(self.registration.scope));
});
