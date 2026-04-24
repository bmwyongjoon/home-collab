import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Filter } from 'lucide-react';
import Layout from '../components/Layout';
import TaskCard from '../components/TaskCard';
import { useAuthStore } from '../store/authStore';
import { useTaskStore } from '../store/taskStore';
import { toDate } from '../utils/dateHelpers';

export default function TaskList() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('one-time'); // 일회성 탭이 첫 번째
  const [assigneeFilter, setAssigneeFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const { currentUser } = useAuthStore();
  const { tasks, categories } = useTaskStore();

  const today = new Date();

  const filtered = useMemo(() => {
    const list = tasks.filter((t) => {
      if (t.type !== tab) return false;
      if (!t.isActive) return false;

      if (assigneeFilter !== 'all') {
        if (assigneeFilter === 'me' && t.assigneeId !== currentUser?.uid) return false;
        if (assigneeFilter === 'together' && t.assigneeId !== 'together') return false;
        if (
          assigneeFilter === 'partner' &&
          (t.assigneeId === currentUser?.uid || t.assigneeId === 'together')
        )
          return false;
      }

      if (categoryFilter !== 'all' && t.categoryId !== categoryFilter) return false;

      return true;
    });

    // 일회성은 마감일 오름차순 정렬
    if (tab === 'one-time') {
      list.sort((a, b) => {
        const da = toDate(a.dueDate);
        const db = toDate(b.dueDate);
        if (!da && !db) return 0;
        if (!da) return 1;
        if (!db) return -1;
        return da - db;
      });
    }

    return list;
  }, [tasks, tab, assigneeFilter, categoryFilter, currentUser?.uid]);

  return (
    <Layout
      title="태스크 목록"
      headerRight={
        <button
          onClick={() => navigate('/tasks/new')}
          className="flex items-center gap-1 px-3 py-1.5 bg-primary-600 text-white rounded-xl text-sm font-medium"
        >
          <Plus size={16} /> 추가
        </button>
      }
    >
      {/* 탭: 일회성 먼저 */}
      <div className="flex bg-slate-100 rounded-xl p-1 mb-4">
        {[
          { key: 'one-time', label: '일회성' },
          { key: 'routine', label: '루틴' },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              tab === key ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 필터 */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <Filter size={14} className="text-slate-400" />
        </div>
        {[
          { key: 'all', label: '전체' },
          { key: 'me', label: '나' },
          { key: 'partner', label: '상대방' },
          { key: 'together', label: '함께' },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setAssigneeFilter(key)}
            className={`px-3 py-1 rounded-full text-xs font-medium border flex-shrink-0 transition-colors ${
              assigneeFilter === key
                ? 'bg-primary-600 text-white border-primary-600'
                : 'bg-white text-slate-500 border-slate-200'
            }`}
          >
            {label}
          </button>
        ))}
        <div className="w-px bg-slate-200 flex-shrink-0" />
        <button
          onClick={() => setCategoryFilter('all')}
          className={`px-3 py-1 rounded-full text-xs font-medium border flex-shrink-0 transition-colors ${
            categoryFilter === 'all'
              ? 'bg-slate-700 text-white border-slate-700'
              : 'bg-white text-slate-500 border-slate-200'
          }`}
        >
          전체 카테고리
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategoryFilter(cat.id)}
            className={`px-3 py-1 rounded-full text-xs font-medium border flex-shrink-0 transition-colors ${
              categoryFilter === cat.id
                ? 'text-white border-transparent'
                : 'bg-white text-slate-500 border-slate-200'
            }`}
            style={categoryFilter === cat.id ? { backgroundColor: cat.color } : {}}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* 목록 */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-3xl mb-3">📋</p>
          <p className="text-slate-500">태스크가 없어요</p>
          <button
            onClick={() => navigate('/tasks/new')}
            className="mt-4 flex items-center gap-2 mx-auto px-4 py-2 bg-primary-600 text-white rounded-xl text-sm font-medium"
          >
            <Plus size={16} /> 태스크 추가
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((task) => (
            <TaskCard key={task.id} task={task} date={today} />
          ))}
        </div>
      )}
    </Layout>
  );
}
