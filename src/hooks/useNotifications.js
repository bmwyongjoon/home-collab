import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { requestNotificationPermission, setupForegroundMessageHandler } from '../firebase/notifications';
import { saveFcmToken } from '../firebase/auth';

export function useNotifications() {
  const { currentUser, userProfile } = useAuthStore();

  useEffect(() => {
    if (!currentUser || !userProfile?.notificationsEnabled) return;

    const vapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY;
    if (!vapidKey) return;

    let cleanupForeground = () => {};

    (async () => {
      const token = await requestNotificationPermission(vapidKey);
      if (token) {
        await saveFcmToken(currentUser.uid, token);
      }

      cleanupForeground = await setupForegroundMessageHandler((payload) => {
        // 포그라운드에서 수신 시 브라우저 알림으로 표시
        if (Notification.permission === 'granted') {
          new Notification(payload.notification?.title || '홈콜라보', {
            body: payload.notification?.body || '',
            icon: '/home-collab/icons/icon-192.png',
          });
        }
      });
    })();

    return () => cleanupForeground();
  }, [currentUser?.uid, userProfile?.notificationsEnabled]);
}
