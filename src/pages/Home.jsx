import { useMemo } from 'react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';
import { Plus, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';
import TaskCard from '../components/TaskCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useAuthStore } from '../store/authStore';
import { useTaskStore } from '../store/taskStore';
import { isTaskDueOnDate, isOneTimeDueOnDate, getPeriodKey } from '../utils/recurrence';
import { toDate, isOverdue } from '../utils/dateHelpers';

export default function Home() {
  const navigate = useNavigate();
  const { currentUser, userProfile, partnerProfile, isLoading } = useAuthStore();
  const { tasks, completions } = useTaskStore();

  const today = new Date();
  const periodKey = getPeriodKey(today);

  const { todayTasks, overdueTasks } = useMemo(() => {
    const activeTasks = tasks.filter((t) => t.isActive);

    const todays = activeTasks.filter((t) => {
      if (t.type === 'routine') return isTaskDueOnDate(t, today);
      if (t.type === 'one-time') return isOneTimeDueOnDate(t, today);
      return false;
    });

    const overdue = activeTasks.filter((t) => {
      if (t.type !== 'one-time') return false;
      const done = completions.some((c) => c.taskId === t.id);
      return !done && t.dueDate && isOverdue(t.dueDate) && !isOneTimeDueOnDate(t, today);
    });

    return { todayTasks: todays, overdueTasks: overdue };
  }, [tasks, completions]);

  const { myCount, togetherCount, completedCount } = useMemo(() => {
    const myTasks = todayTasks.filter(
      (t) => t.assigneeId === currentUser?.uid || t.assigneeId === 'together'
    );
    const done = todayTasks.filter((t) =>
      completions.some((c) => c.taskId === t.id && c.periodKey === periodKey)
    ).length;
    return {
      myCount: todayTasks.filter((t) => t.assigneeId === currentUser?.uid).length,
      togetherCount: todayTasks.filter((t) => t.assigneeId === 'together').length,
      completedCount: done,
    };
  }, [todayTasks, completions, currentUser?.uid, periodKey]);

  if (isLoading) return <LoadingSpinner fullScreen />;

  const greeting = () => {
    const hour = today.getHours();
    if (hour < 12) return '좋은 아침이에요';
    if (hour < 18) return '좋은 오후예요';
    return '좋은 저녁이에요';
  };

  return (
    <Layout>
      {/* 헤더 카드 */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-5 mb-5 text-white">
        <p className="text-primary-100 text-sm">{greeting()},</p>
        <h2 className="text-xl font-bold mt-0.5">{userProfile?.displayName || ''}님 👋</h2>
        <p className="text-primary-200 text-sm mt-1">
          {format(today, 'M월 d일 (E)', { locale: ko })}
          {partnerProfile && ` · ${partnerProfile.displayName}님과 협업 중`}
        </p>

        {/* 요약 */}
        <div className="flex gap-3 mt-4">
          {[
            { label: '내 할 일', value: myCount, color: 'bg-white/20' },
            { label: '함께', value: togetherCount, color: 'bg-white/20' },
            { label: '완료', value: completedCount, color: 'bg-white/30' },
          ].map(({ label, value, color }) => (
            <div key={label} className={`flex-1 ${color} rounded-xl p-2.5 text-center`}>
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-xs text-primary-100 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 기한 초과 태스크 */}
      {overdueTasks.length > 0 && (
        <section className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle size={16} className="text-red-500" />
            <h3 className="text-sm font-semibold text-red-600">기한 초과 ({overdueTasks.length})</h3>
          </div>
          <div className="space-y-2">
            {overdueTasks.map((task) => (
              <TaskCard key={task.id} task={task} date={today} />
            ))}
          </div>
        </section>
      )}

      {/* 오늘의 태스크 */}
      <section>
        <h3 className="text-sm font-semibold text-slate-700 mb-3">
          오늘의 할 일 ({todayTasks.length})
        </h3>
        {todayTasks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-4xl mb-3">🎉</p>
            <p className="text-slate-500">오늘 할 일이 없어요!</p>
            <p className="text-slate-400 text-sm mt-1">새 태스크를 추가해보세요</p>
            <button
              onClick={() => navigate('/tasks/new')}
              className="mt-4 flex items-center gap-2 mx-auto px-4 py-2 bg-primary-600 text-white rounded-xl text-sm font-medium"
            >
              <Plus size={16} /> 태스크 추가
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            {todayTasks.map((task) => (
              <TaskCard key={task.id} task={task} date={today} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}
