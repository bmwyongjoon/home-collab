import { getToken, onMessage } from 'firebase/messaging';
import { getMessagingInstance } from './config';

export async function requestNotificationPermission(vapidKey) {
  if (!('Notification' in window)) return null;
  const permission = await Notification.requestPermission();
  if (permission !== 'granted') return null;

  const messaging = await getMessagingInstance();
  if (!messaging) return null;

  try {
    const token = await getToken(messaging, { vapidKey });
    return token;
  } catch (err) {
    console.error('FCM 토큰 발급 실패:', err);
    return null;
  }
}

export async function setupForegroundMessageHandler(callback) {
  const messaging = await getMessagingInstance();
  if (!messaging) return () => {};
  return onMessage(messaging, (payload) => {
    callback(payload);
  });
}

// 파트너에게 알림 전송 (Netlify 함수 사용)
export async function sendPushNotification({ tokens, title, body, data }) {
  const apiUrl = import.meta.env.VITE_NOTIFICATION_API_URL;
  if (!apiUrl || !tokens || tokens.length === 0) return;

  try {
    await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tokens, title, body, data }),
    });
  } catch (err) {
    console.error('알림 전송 실패:', err);
  }
}
