import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, isSameDay, isToday } from 'date-fns';
import { ko } from 'date-fns/locale';
import Layout from '../components/Layout';
import TaskCard from '../components/TaskCard';
import Modal from '../components/Modal';
import { useAuthStore } from '../store/authStore';
import { useTaskStore } from '../store/taskStore';
import { isTaskDueOnDate, isOneTimeDueOnDate, getPeriodKey } from '../utils/recurrence';
import { formatMonthYear } from '../utils/dateHelpers';

const DAY_LABELS = ['일', '월', '화', '수', '목', '금', '토'];

export default function Calendar() {
  const now = new Date();
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [filters, setFilters] = useState({ me: true, partner: true, together: true, completed: true });

  const { currentUser } = useAuthStore();
  const { tasks, completions } = useTaskStore();

  function prevMonth() {
    if (currentMonth === 0) { setCurrentYear(y => y - 1); setCurrentMonth(11); }
    else setCurrentMonth(m => m - 1);
  }
  function nextMonth() {
    if (currentMonth === 11) { setCurrentYear(y => y + 1); setCurrentMonth(0); }
    else setCurrentMonth(m => m + 1);
  }

  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(new Date(currentYear, currentMonth, 1));
    const monthEnd = endOfMonth(monthStart);
    const calStart = startOfWeek(monthStart, { weekStartsOn: 0 });
    const calEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });
    return eachDayOfInterval({ start: calStart, end: calEnd });
  }, [currentYear, currentMonth]);

  function getTasksForDay(date) {
    return tasks.filter((task) => {
      if (!task.isActive) return false;
      const isDue =
        task.type === 'routine'
          ? isTaskDueOnDate(task, date)
          : isOneTimeDueOnDate(task, date);
      if (!isDue) return false;

      const periodKey = getPeriodKey(date);
      const done = completions.some((c) => c.taskId === task.id && c.periodKey === periodKey);

      // 필터 체크
      const isMe = task.assigneeId === currentUser?.uid;
      const isTogether = task.assigneeId === 'together';
      const isPartner = !isMe && !isTogether;

      if (isMe && !filters.me) return false;
      if (isPartner && !filters.partner) return false;
      if (isTogether && !filters.together) return false;
      if (done && !filters.completed) return false;
      return true;
    });
  }

  const selectedTasks = selectedDate ? getTasksForDay(selectedDate) : [];

  return (
    <Layout title={formatMonthYear(currentYear, currentMonth)}>
      {/* 월 네비게이션 */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="p-2 rounded-xl hover:bg-slate-100">
          <ChevronLeft size={20} className="text-slate-600" />
        </button>
        <button
          onClick={() => { setCurrentYear(now.getFullYear()); setCurrentMonth(now.getMonth()); }}
          className="text-sm font-medium text-primary-600 px-3 py-1 rounded-lg hover:bg-primary-50"
        >
          오늘
        </button>
        <button onClick={nextMonth} className="p-2 rounded-xl hover:bg-slate-100">
          <ChevronRight size={20} className="text-slate-600" />
        </button>
      </div>

      {/* 필터 */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {[
          { key: 'me', label: '나' },
          { key: 'partner', label: '상대방' },
          { key: 'together', label: '함께' },
          { key: 'completed', label: '완료' },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilters((f) => ({ ...f, [key]: !f[key] }))}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
              filters[key]
                ? 'bg-primary-600 text-white border-primary-600'
                : 'bg-white text-slate-400 border-slate-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 요일 헤더 */}
      <div className="grid grid-cols-7 mb-1">
        {DAY_LABELS.map((d, i) => (
          <div
            key={d}
            className={`text-center text-xs font-medium py-2 ${
              i === 0 ? 'text-red-400' : i === 6 ? 'text-blue-400' : 'text-slate-400'
            }`}
          >
            {d}
          </div>
        ))}
      </div>

      {/* 달력 그리드 */}
      <div className="grid grid-cols-7 gap-px bg-slate-100 rounded-xl overflow-hidden border border-slate-100">
        {calendarDays.map((day) => {
          const isCurrentMonth = day.getMonth() === currentMonth;
          const dayTasks = isCurrentMonth ? getTasksForDay(day) : [];
          const isSelected = selectedDate && isSameDay(day, selectedDate);
          const todayMark = isToday(day);

          return (
            <button
              key={day.toISOString()}
              onClick={() => isCurrentMonth && setSelectedDate(isSameDay(day, selectedDate) ? null : day)}
              className={`bg-white p-1.5 min-h-[56px] flex flex-col items-center transition-colors ${
                !isCurrentMonth ? 'opacity-30 cursor-default' : 'hover:bg-primary-50'
              } ${isSelected ? 'bg-primary-50 ring-2 ring-inset ring-primary-300' : ''}`}
            >
              <span
                className={`w-7 h-7 flex items-center justify-center text-sm rounded-full mb-1 ${
                  todayMark
                    ? 'bg-primary-600 text-white font-bold'
                    : day.getDay() === 0
                    ? 'text-red-400'
                    : day.getDay() === 6
                    ? 'text-blue-400'
                    : 'text-slate-700'
                }`}
              >
                {day.getDate()}
              </span>
              {/* 태스크 점 */}
              <div className="flex flex-wrap justify-center gap-0.5 max-w-full">
                {dayTasks.slice(0, 4).map((t, i) => {
                  const isDone = completions.some(
                    (c) => c.taskId === t.id && c.periodKey === getPeriodKey(day)
                  );
                  return (
                    <span
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${isDone ? 'bg-green-400' : 'bg-primary-400'}`}
                    />
                  );
                })}
                {dayTasks.length > 4 && (
                  <span className="text-[9px] text-slate-400">+{dayTasks.length - 4}</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* 선택한 날짜 태스크 모달 */}
      <Modal
        isOpen={!!selectedDate}
        onClose={() => setSelectedDate(null)}
        title={selectedDate ? format(selectedDate, 'M월 d일 (E) 할 일', { locale: ko }) : ''}
      >
        {selectedTasks.length === 0 ? (
          <p className="text-center text-slate-400 py-6">이 날 할 일이 없어요</p>
        ) : (
          <div className="space-y-2">
            {selectedTasks.map((task) => (
              <TaskCard key={task.id} task={task} date={selectedDate} showActions={false} />
            ))}
          </div>
        )}
      </Modal>
    </Layout>
  );
}
