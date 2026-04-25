import { getToken, onMessage } from 'firebase/messaging';
import { getMessagingInstance } from './config';

export async function requestNotificationPermission(vapidKey) {
  if (!('Notification' in window)) {
    console.warn('[FCM] 이 브라우저는 알림을 지원하지 않습니다.');
    return null;
  }

  if (!vapidKey || vapidKey === 'your_vapid_key') {
    console.error('[FCM] VITE_FIREBASE_VAPID_KEY가 설정되지 않았습니다. Firebase Console → 프로젝트 설정 → 클라우드 메시징 → 웹 푸시 인증서에서 발급하세요.');
    return null;
  }

  const permission = await Notification.requestPermission();
  console.log('[FCM] 알림 권한 상태:', permission);
  if (permission !== 'granted') return null;

  const messaging = await getMessagingInstance();
  if (!messaging) {
    console.warn('[FCM] messaging 인스턴스 초기화 실패 (브라우저 미지원)');
    return null;
  }

  try {
    let serviceWorkerRegistration;
    if ('serviceWorker' in navigator) {
      // import.meta.env.BASE_URL 사용 → Netlify('/')와 GitHub Pages('/home-collab/')에서 모두 동작
      const base = import.meta.env.BASE_URL;
      serviceWorkerRegistration = await navigator.serviceWorker.register(
        base + 'firebase-messaging-sw.js',
        { scope: base }
      );
      await navigator.serviceWorker.ready;
      console.log('[FCM] 서비스 워커 등록 완료:', serviceWorkerRegistration.scope);
    } else {
      console.warn('[FCM] 이 브라우저는 Service Worker를 지원하지 않습니다.');
    }

    const tokenOptions = { vapidKey };
    if (serviceWorkerRegistration) {
      tokenOptions.serviceWorkerRegistration = serviceWorkerRegistration;
    }

    const token = await getToken(messaging, tokenOptions);
    if (token) {
      console.log('[FCM] 토큰 발급 성공:', token.slice(0, 20) + '...');
    } else {
      console.warn('[FCM] 빈 토큰 반환됨 — VAPID 키 또는 FCM 설정을 확인하세요.');
    }
    return token || null;
  } catch (err) {
    console.error('[FCM] 토큰 발급 오류:', err.code, err.message);
    return null;
  }
}

export async function setupForegroundMessageHandler(callback) {
  const messaging = await getMessagingInstance();
  if (!messaging) return () => {};
  console.log('[FCM] 포그라운드 메시지 핸들러 등록 완료');
  return onMessage(messaging, (payload) => {
    console.log('[FCM] 포그라운드 메시지 수신:', payload);
    callback(payload);
  });
}

// 두 사람 모두에게 알림 전송 (Netlify 함수 사용)
export async function sendPushNotification({ tokens, title, body, data }) {
  const apiUrl = import.meta.env.VITE_NOTIFICATION_API_URL;

  if (!apiUrl || apiUrl.includes('your-app.netlify.app')) {
    console.warn('[FCM] VITE_NOTIFICATION_API_URL이 설정되지 않았습니다. Netlify 함수 배포 후 .env에 URL을 입력하세요.');
    return;
  }
  if (!tokens || tokens.length === 0) {
    console.warn('[FCM] 전송할 FCM 토큰이 없습니다. 상대방이 알림을 허용했는지 확인하세요.');
    return;
  }

  console.log('[FCM] 알림 전송 시도:', { tokenCount: tokens.length, title, body });

  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tokens, title, body, data: data || {} }),
    });
    const result = await res.json();
    console.log('[FCM] 알림 전송 결과:', result);
  } catch (err) {
    console.error('[FCM] 알림 전송 실패:', err);
  }
}
