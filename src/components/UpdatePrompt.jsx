import { useRegisterSW } from 'virtual:pwa-register/react';
import { RefreshCw } from 'lucide-react';

export default function UpdatePrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
  } = useRegisterSW();

  if (!needRefresh) return null;

  async function handleUpdate() {
    setNeedRefresh(false);
    try {
      // 대기 중인 서비스 워커에 직접 SKIP_WAITING 메시지 전송
      const reg = await navigator.serviceWorker.getRegistration();
      if (reg?.waiting) {
        // 새 SW가 컨트롤을 넘겨받으면 즉시 리로드
        navigator.serviceWorker.addEventListener(
          'controllerchange',
          () => window.location.reload(),
          { once: true }
        );
        reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        return;
      }
    } catch {
      // fallthrough
    }
    // 대기 SW가 없으면 바로 리로드
    window.location.reload();
  }

  return (
    <div className="fixed bottom-24 left-4 right-4 z-50 animate-in">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-9 h-9 bg-primary-100 rounded-xl flex items-center justify-center">
            <RefreshCw size={18} className="text-primary-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-800">새 버전이 출시됐어요!</p>
            <p className="text-xs text-slate-500 mt-0.5">업데이트하고 최신 기능을 사용해보세요.</p>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <button
            onClick={handleUpdate}
            className="flex-1 py-2.5 bg-primary-600 text-white rounded-xl text-sm font-semibold hover:bg-primary-700 active:scale-[0.98] transition-all"
          >
            지금 업데이트
          </button>
          <button
            onClick={() => setNeedRefresh(false)}
            className="px-4 py-2.5 bg-slate-100 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors"
          >
            나중에
          </button>
        </div>
      </div>
    </div>
  );
}
