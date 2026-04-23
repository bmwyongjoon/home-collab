import BottomNav from './BottomNav';

export default function Layout({ children, title, headerRight, noPadding }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {title && (
        <header className="sticky top-0 z-30 bg-white border-b border-slate-100 px-4 h-14 flex items-center justify-between">
          <h1 className="text-lg font-bold text-slate-800">{title}</h1>
          {headerRight && <div>{headerRight}</div>}
        </header>
      )}
      <main className={`flex-1 pb-20 ${noPadding ? '' : 'px-4 py-4'}`}>{children}</main>
      <BottomNav />
    </div>
  );
}
