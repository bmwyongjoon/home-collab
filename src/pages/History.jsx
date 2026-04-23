import { useMemo, useState } from 'react';
import { format, startOfMonth, isSameMonth } from 'date-fns';
import { ko } from 'date-fns/locale';
import Layout from '../components/Layout';
import { useAuthStore } from '../store/authStore';
import { useTaskStore } from '../store/taskStore';
import { toDate } from '../utils/dateHelpers';

export default function History() {
  const [filter, setFilter] = useState('all'); // 'all' | 'me' | 'partner'
  const { currentUser, userProfile, partnerProfile } = useAuthStore();
  const { completions, getCategoryById } = useTaskStore();

  const filtered = useMemo(() => {
    const sorted = [...completions].sort((a, b) => {
      const at = toDate(a.completedAt)?.getTime() || 0;
      const bt = toDate(b.completedAt)?.getTime() || 0;
      return bt - at;
    });

    return sorted.filter((c) => {
      if (filter === 'me') return c.completedBy === currentUser?.uid;
      if (filter === 'partner') return c.completedBy !== currentUser?.uid;
      return true;
    });
  }, [completions, filter, currentUser?.uid]);

  // 월별 그룹핑
  const grouped = useMemo(() => {
    const groups = {};
    filtered.forEach((c) => {
      const date = toDate(c.completedAt);
      if (!date) return;
      const key = format(date, 'yyyy-MM');
      if (!groups[key]) groups[key] = { label: format(date, 'yyyy년 M월', { locale: ko }), items: [] };
      groups[key].items.push(c);
    });
    return Object.values(groups);
  }, [filtered]);

  return (
    <Layout title="히스토리">
      {/* 필터 */}
      <div className="flex gap-2 mb-4">
        {[
          { key: 'all', label: '전체' },
          { key: 'me', label: `${userProfile?.displayName || '나'}` },
          { key: 'partner', label: `${partnerProfile?.displayName || '상대방'}` },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              filter === key
                ? 'bg-primary-600 text-white border-primary-600'
                : 'bg-white text-slate-500 border-slate-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {grouped.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-4xl mb-3">📝</p>
          <p className="text-slate-500">완료 기록이 없어요</p>
        </div>
      ) : (
        <div className="space-y-6">
          {grouped.map(({ label, items }) => (
            <section key={label}>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-sm font-bold text-slate-600">{label}</h3>
                <span className="text-xs text-slate-400">{items.length}개</span>
              </div>
              <div className="space-y-2">
                {items.map((c) => {
                  const date = toDate(c.completedAt);
                  const isMe = c.completedBy === currentUser?.uid;
                  const cat = getCategoryById(c.categoryId);
                  return (
                    <div
                      key={c.id}
                      className="bg-white rounded-xl border border-slate-100 px-4 py-3 flex items-start gap-3"
                    >
                      <span className="text-lg flex-shrink-0 mt-0.5">
                        {cat?.icon || '✅'}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-slate-800 truncate">{c.taskTitle}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${isMe ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'}`}>
                            {c.completedByName}
                          </span>
                          {c.isAssist && (
                            <span className="text-xs text-slate-400">도움</span>
                          )}
                          {cat && (
                            <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: cat.color + '20', color: cat.color }}>
                              {cat.name}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 flex-shrink-0 mt-0.5">
                        {date ? format(date, 'M/d HH:mm') : ''}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}
    </Layout>
  );
}
