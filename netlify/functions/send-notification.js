// FCM 푸시 알림을 서버에서 전송하는 Netlify 서버리스 함수
// 배포: GitHub 레포를 Netlify에 연결 후 자동 배포
// 환경변수: FIREBASE_SERVICE_ACCOUNT (서비스 계정 JSON 문자열), FIREBASE_PROJECT_ID

const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getMessaging } = require('firebase-admin/messaging');

if (!getApps().length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || '{}');
  initializeApp({ credential: cert(serviceAccount) });
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { tokens, title, body, data } = JSON.parse(event.body || '{}');

    if (!tokens || tokens.length === 0) {
      return { statusCode: 400, body: JSON.stringify({ error: 'tokens required' }) };
    }

    const messaging = getMessaging();
    const result = await messaging.sendEachForMulticast({
      tokens,
      notification: { title, body },
      data: data || {},
      android: { priority: 'high' },
      apns: { payload: { aps: { sound: 'default', badge: 1 } } },
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: result.successCount, failure: result.failureCount }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
