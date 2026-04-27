export default function LoadingSpinner({ fullScreen, message, error, onRetry }) {
  if (fullScreen) {
    if (error) {
      return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50 gap-6 px-8">
          <div className="text-4xl">⚠️</div>
          <div className="text-center">
            <p className="text-slate-700 font-medium whitespace-pre-line">{error}</p>
          </div>
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-6 py-2.5 bg-primary-600 text-white rounded-xl font-medium text-sm active:opacity-80"
            >
              다시 시도
            </button>
          )}
        </div>
      );
    }

    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50 gap-5">
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl">🏠</span>
          <h1 className="text-2xl font-bold text-primary-600">함께할 일</h1>
        </div>
        <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
        <p className="text-sm text-slate-400">{message || '불러오는 중...'}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3 py-12">
      <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
      <p className="text-sm text-slate-400">{message || '불러오는 중...'}</p>
    </div>
  );
}
