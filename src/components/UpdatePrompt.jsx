import { useRegisterSW } from 'virtual:pwa-register/react';
import { RefreshCw } from 'lucide-react';

export default function UpdatePrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  if (!needRefresh) return null;

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
            onClick={() => updateServiceWorker(true)}
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
