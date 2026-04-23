import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Calendar, Plus, ClipboardList, Settings } from 'lucide-react';

const navItems = [
  { to: '/', icon: Home, label: '홈' },
  { to: '/calendar', icon: Calendar, label: '캘린더' },
  { to: '/tasks', icon: ClipboardList, label: '태스크' },
  { to: '/settings', icon: Settings, label: '설정' },
];

export default function BottomNav() {
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 safe-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {navItems.slice(0, 2).map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors ${
                isActive ? 'text-primary-600' : 'text-slate-400'
              }`
            }
          >
            <Icon size={22} />
            <span className="text-xs">{label}</span>
          </NavLink>
        ))}

        {/* 가운데 + 버튼 */}
        <button
          onClick={() => navigate('/tasks/new')}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-600 text-white shadow-lg -mt-6 active:scale-95 transition-transform"
          aria-label="태스크 추가"
        >
          <Plus size={28} />
        </button>

        {navItems.slice(2).map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors ${
                isActive ? 'text-primary-600' : 'text-slate-400'
              }`
            }
          >
            <Icon size={22} />
            <span className="text-xs">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
