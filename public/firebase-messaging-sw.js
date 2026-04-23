// Firebase Messaging Service Worker (백그라운드 푸시 수신)
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

// 이 파일은 빌드 시 자동으로 Firebase 설정이 주입되지 않으므로
// 아래 설정을 직접 입력해야 합니다
firebase.initializeApp({
  apiKey: self.__FIREBASE_API_KEY__,
  authDomain: self.__FIREBASE_AUTH_DOMAIN__,
  projectId: self.__FIREBASE_PROJECT_ID__,
  storageBucket: self.__FIREBASE_STORAGE_BUCKET__,
  messagingSenderId: self.__FIREBASE_MESSAGING_SENDER_ID__,
  appId: self.__FIREBASE_APP_ID__,
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
