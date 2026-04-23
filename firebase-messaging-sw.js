// Firebase Messaging Service Worker (백그라운드 푸시 수신)
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

// 이 파일은 빌드 시 자동으로 Firebase 설정이 주입되지 않으므로
// 아래 설정을 직접 입력해야 합니다
firebase.initializeApp({
  apiKey: "AIzaSyAYr-SX1BaUG_PWF31H1uvTspY-rq5arGg",
  authDomain: "home-collab.firebaseapp.com",
  projectId: "home-collab",
  storageBucket: "home-collab.firebasestorage.app",
  messagingSenderId: "803047926601",
  appId: "1:803047926601:web:b84b6334215b55f9cac898",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body, icon } = payload.notification || {};
  self.registration.showNotification(title || '홈콜라보', {
    body: body || '',
    icon: icon || '/home-collab/icons/icon-192.png',
    badge: '/home-collab/icons/icon-192.png',
    data: payload.data,
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/home-collab/')
  );
});
