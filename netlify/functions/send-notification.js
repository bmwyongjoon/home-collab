const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getMessaging } = require('firebase-admin/messaging');

// GitHub Pages(bmwyongjoon.github.io)에서 호출 시 크로스오리진 허용
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function initAdmin() {
  if (getApps().length) return;
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!raw) throw new Error('FIREBASE_SERVICE_ACCOUNT 환경변수가 설정되지 않았습니다.');
  initializeApp({ credential: cert(JSON.parse(raw)) });
}

exports.handler = async (event) => {
  // CORS preflight 처리
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: CORS_HEADERS, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: CORS_HEADERS, body: 'Method Not Allowed' };
  }

  try {
    initAdmin();

    const { tokens, title, body, data } = JSON.parse(event.body || '{}');

    if (!tokens || tokens.length === 0) {
      return {
        statusCode: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'tokens required' }),
      };
    }

    const result = await getMessaging().sendEachForMulticast({
      tokens,
      notification: { title, body },
      data: data || {},
      android: { priority: 'high' },
      apns: { payload: { aps: { sound: 'default', badge: 1 } } },
    });

    console.log(`[FCM] 전송 완료 — 성공: ${result.successCount}, 실패: ${result.failureCount}`);

    return {
      statusCode: 200,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: result.successCount,
        failure: result.failureCount,
        responses: result.responses.map((r) => ({
          success: r.success,
          error: r.error?.message,
        })),
      }),
    };
  } catch (err) {
    console.error('[FCM] 오류:', err.message);
    return {
      statusCode: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message }),
    };
  }
};
