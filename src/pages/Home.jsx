import { useMemo, useState } from 'react';
import { format, isToday, isTomorrow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';
import { Plus, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';
import TaskCard from '../components/TaskCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useAuthStore } from '../store/authStore';
import { useTaskStore } from '../store/taskStore';
import { isTaskDueOnDate, isOneTimeDueOnDate, getPeriodKey } from '../utils/recurrence';
import { isOverdue, toDate } from '../utils/dateHelpers';

function dateGroupLabel(date) {
  if (isToday(date)) return `오늘 ${format(date, 'M/d')}`;
  if (isTomorrow(date)) return `내일 ${format(date, 'M/d')}`;
  return format(date, 'M/d (E)', { locale: ko });
}

export default function Home() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('task'); // 'task' | 'routine'
  const [activeCard, setActiveCard] = useState(null); // null | 'todo' | 'routine' | 'completed'

  const { userProfile, partnerProfile, isLoading } = useAuthStore();
  const { tasks, completions } = useTaskStore();

  const today = new Date();
  const periodKey = getPeriodKey(today);

  const activeTasks = useMemo(() => tasks.filter((t) => t.isActive), [tasks]);

  const todayOnetime = useMemo(
    () => activeTasks.filter((t) => t.type === 'one-time' && isOneTimeDueOnDate(t, today)),
    [activeTasks]
  );

  const todayRoutine = useMemo(
    () => activeTasks.filter((t) => t.type === 'routine' && isTaskDueOnDate(t, today)),
    [activeTasks]
  );

  const completedTodo = useMemo(
    () =>
      todayOnetime.filter((t) =>
        completions.some((c) => c.taskId === t.id && c.periodKey === periodKey)
      ).length,
    [todayOnetime, completions, periodKey]
  );

  const completedRoutineCount = useMemo(
    () =>
      todayRoutine.filter((t) =>
        completions.some((c) => c.taskId === t.id && c.periodKey === periodKey)
      ).length,
    [todayRoutine, completions, periodKey]
  );

  // 미완료 일회성 태스크 날짜별 그룹 (오늘 이후)
  const groupedOnetime = useMemo(() => {
    const todayNorm = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    let list = activeTasks
      .filter((t) => {
        if (t.type !== 'one-time' || !t.dueDate) return false;
        const due = toDate(t.dueDate);
        if (!due) return false;
        const dueNorm = new Date(due.getFullYear(), due.getMonth(), due.getDate());
        if (dueNorm < todayNorm) return false;
        const dk = getPeriodKey(due);
        return !completions.some((c) => c.taskId === t.id && c.periodKey === dk);
      })
      .sort((a, b) => toDate(a.dueDate) - toDate(b.dueDate));

    if (activeCard === 'todo') {
      list = list.filter((t) => isOneTimeDueOnDate(t, today));
    }

    const groupMap = new Map();
    for (const task of list) {
      const due = toDate(task.dueDate);
      const key = getPeriodKey(due);
      if (!groupMap.has(key)) groupMap.set(key, { key, date: due, tasks: [] });
      groupMap.get(key).tasks.push(task);
    }
    return Array.from(groupMap.values());
  }, [activeTasks, completions, activeCard]);

  // 오늘 완료한 태스크 목록
  const completedList = useMemo(
    () => [
      ...todayOnetime.filter((t) =>
        completions.some((c) => c.taskId === t.id && c.periodKey === periodKey)
      ),
      ...todayRoutine.filter((t) =>
        completions.some((c) => c.taskId === t.id && c.periodKey === periodKey)
      ),
    ],
    [todayOnetime, todayRoutine, completions, periodKey]
  );

  const overdueTasks = useMemo(
    () =>
      activeTasks.filter((t) => {
        if (t.type !== 'one-time') return false;
        const done = completions.some((c) => c.taskId === t.id);
        return !done && t.dueDate && isOverdue(t.dueDate) && !isOneTimeDueOnDate(t, today);
      }),
    [activeTasks, completions]
  );

  if (isLoading) return <LoadingSpinner fullScreen />;

  const hour = today.getHours();
  const greeting = hour < 12 ? '좋은 아침이에요' : hour < 18 ? '좋은 오후예요' : '좋은 저녁이에요';

  function handleCardClick(type) {
    if (type === 'todo') {
      setTab('task');
      setActiveCard((prev) => (prev === 'todo' ? null : 'todo'));
    } else if (type === 'routine') {
      setTab('routine');
      setActiveCard((prev) => (prev === 'routine' ? null : 'routine'));
    } else {
      setActiveCard((prev) => (prev === 'completed' ? null : 'completed'));
    }
  }

  return (
    <Layout>
      {/* 헤더 카드 */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-5 mb-5 text-white">
        <p className="text-primary-100 text-sm">{greeting},</p>
        <h2 className="text-xl font-bold mt-0.5">{userProfile?.displayName || ''}님 👋</h2>
        <p className="text-primary-200 text-sm mt-1">
          {format(today, 'M월 d일 (E)', { locale: ko })}
          {partnerProfile && ` · ${partnerProfile.displayName}님과 함께`}
        </p>

        {/* 요약 카드 (클릭 가능) */}
        <div className="flex gap-3 mt-4">
          {[
            { type: 'todo', label: '오늘 할 일', value: todayOnetime.length },
            { type: 'routine', label: '오늘 루틴', value: todayRoutine.length },
            { type: 'completed', label: '완료', value: completedTodo + completedRoutineCount },
          ].map(({ type, label, value }) => (
            <button
              key={type}
              onClick={() => handleCardClick(type)}
              className={`flex-1 rounded-xl p-2.5 text-center transition-all active:scale-95 ${
                activeCard === type
                  ? 'bg-white/40 ring-2 ring-white/60'
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-xs text-primary-100 mt-0.5">{label}</p>
            </button>
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

      {/* 완료 목록 뷰 */}
      {activeCard === 'completed' ? (
        <section>
          <h3 className="text-sm font-semibold text-slate-600 mb-3">오늘 완료한 태스크</h3>
          {completedList.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-4xl mb-3">✅</p>
              <p className="text-slate-500">아직 완료한 태스크가 없어요</p>
            </div>
          ) : (
            <div className="space-y-2">
              {completedList.map((task) => (
                <TaskCard key={task.id} task={task} date={today} />
              ))}
            </div>
          )}
        </section>
      ) : (
        <>
          {/* 탭 */}
          <div className="flex bg-slate-100 rounded-xl p-1 mb-4">
            {[
              { key: 'task', label: '태스크' },
              { key: 'routine', label: `오늘의 루틴 (${todayRoutine.length})` },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => {
                  setTab(key);
                  setActiveCard(null);
                }}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                  tab === key ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* 태스크 탭: 날짜 그룹별 일회성 태스크 */}
          {tab === 'task' && (
            <section>
              {groupedOnetime.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-4xl mb-3">📌</p>
                  <p className="text-slate-500">
                    {activeCard === 'todo' ? '오늘 마감인 할 일이 없어요!' : '예정된 할 일이 없어요!'}
                  </p>
                  <p className="text-slate-400 text-sm mt-1">새 태스크를 추가해보세요</p>
                  <button
                    onClick={() => navigate('/tasks/new')}
                    className="mt-4 flex items-center gap-2 mx-auto px-4 py-2 bg-primary-600 text-white rounded-xl text-sm font-medium"
                  >
                    <Plus size={16} /> 태스크 추가
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  {groupedOnetime.map(({ key, date, tasks: groupTasks }) => (
                    <div key={key}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                          {dateGroupLabel(date)}
                        </span>
                        <span className="text-xs text-slate-400">{groupTasks.length}개</span>
                      </div>
                      <div className="space-y-2">
                        {groupTasks.map((task) => (
                          <TaskCard key={task.id} task={task} date={date} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* 루틴 탭: 오늘의 루틴 */}
          {tab === 'routine' && (
            <section>
              {todayRoutine.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-4xl mb-3">🔁</p>
                  <p className="text-slate-500">오늘 해야 할 루틴이 없어요!</p>
                  <p className="text-slate-400 text-sm mt-1">새 루틴을 추가해보세요</p>
                  <button
                    onClick={() => navigate('/tasks/new')}
                    className="mt-4 flex items-center gap-2 mx-auto px-4 py-2 bg-primary-600 text-white rounded-xl text-sm font-medium"
                  >
                    <Plus size={16} /> 루틴 추가
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-xs text-slate-400 mb-3">
                    {completedRoutineCount} / {todayRoutine.length} 완료
                  </p>
                  <div className="space-y-2">
                    {todayRoutine.map((task) => (
                      <TaskCard key={task.id} task={task} date={today} />
                    ))}
                  </div>
                </>
              )}
            </section>
          )}
        </>
      )}
    </Layout>
  );
}
