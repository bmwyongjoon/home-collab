import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, X } from 'lucide-react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  isSameDay,
  isToday,
} from 'date-fns';
import { ko } from 'date-fns/locale';
import Layout from '../components/Layout';
import TaskCard from '../components/TaskCard';
import Modal from '../components/Modal';
import { useAuthStore } from '../store/authStore';
import { useTaskStore } from '../store/taskStore';
import { isTaskDueOnDate, isOneTimeDueOnDate, getPeriodKey } from '../utils/recurrence';
import { formatMonthYear } from '../utils/dateHelpers';

const DAY_LABELS = ['일', '월', '화', '수', '목', '금', '토'];
const YEARS = Array.from({ length: 11 }, (_, i) => 2020 + i);
const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);

function getBarStyle(task, currentUid) {
  const isMe = task.assigneeId === currentUid;
  const isTogether = task.assigneeId === 'together';
  const isRoutine = task.type === 'routine';
  if (isMe) return isRoutine ? 'bg-blue-200 text-blue-800' : 'bg-blue-500 text-white';
  if (isTogether) return isRoutine ? 'bg-green-200 text-green-800' : 'bg-green-500 text-white';
  return isRoutine ? 'bg-pink-200 text-pink-800' : 'bg-pink-500 text-white';
}

export default function Calendar() {
  const now = new Date();
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [pickerYear, setPickerYear] = useState(now.getFullYear());
  const [filters, setFilters] = useState({ me: true, partner: true, together: true, completed: true });

  const { currentUser } = useAuthStore();
  const { tasks, completions } = useTaskStore();

  function prevMonth() {
    if (currentMonth === 0) { setCurrentYear((y) => y - 1); setCurrentMonth(11); }
    else setCurrentMonth((m) => m - 1);
  }
  function nextMonth() {
    if (currentMonth === 11) { setCurrentYear((y) => y + 1); setCurrentMonth(0); }
    else setCurrentMonth((m) => m + 1);
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

  const titleElement = (
    <button
      onClick={() => { setPickerYear(currentYear); setShowPicker(true); }}
      className="flex items-center gap-1 text-lg font-bold text-slate-800 hover:text-primary-600 transition-colors"
    >
      {formatMonthYear(currentYear, currentMonth)}
      <ChevronDown size={16} />
    </button>
  );

  return (
    <Layout title={titleElement}>
      {/* 연도/월 선택 팝업 */}
      {showPicker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl p-5 w-72 shadow-xl mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-800">연도 / 월 선택</h3>
              <button
                onClick={() => setShowPicker(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>

            {/* 연도 선택 */}
            <div className="grid grid-cols-4 gap-1.5 mb-4">
              {YEARS.map((y) => (
                <button
                  key={y}
                  onClick={() => setPickerYear(y)}
                  className={`py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    pickerYear === y
                      ? 'bg-primary-600 text-white'
                      : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>

            <div className="h-px bg-slate-100 mb-4" />

            {/* 월 선택 */}
            <div className="grid grid-cols-4 gap-1.5">
              {MONTHS.map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    setCurrentYear(pickerYear);
                    setCurrentMonth(m - 1);
                    setShowPicker(false);
                  }}
                  className={`py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    pickerYear === currentYear && m - 1 === currentMonth
                      ? 'bg-primary-600 text-white'
                      : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  {m}월
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

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

      {/* 색상 범례 */}
      <div className="flex gap-3 mb-3 flex-wrap">
        {[
          { label: '나 (일회성)', color: 'bg-blue-500' },
          { label: '나 (루틴)', color: 'bg-blue-200' },
          { label: '상대방 (일회성)', color: 'bg-pink-500' },
          { label: '함께 (일회성)', color: 'bg-green-500' },
        ].map(({ label, color }) => (
          <div key={label} className="flex items-center gap-1">
            <span className={`w-2.5 h-2.5 rounded-sm ${color}`} />
            <span className="text-[10px] text-slate-400">{label}</span>
          </div>
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
              onClick={() =>
                isCurrentMonth && setSelectedDate(isSameDay(day, selectedDate) ? null : day)
              }
              className={`bg-white p-1 min-h-[80px] flex flex-col transition-colors ${
                !isCurrentMonth ? 'opacity-30 cursor-default' : 'hover:bg-primary-50'
              } ${isSelected ? 'bg-primary-50 ring-2 ring-inset ring-primary-300' : ''}`}
            >
              <span
                className={`w-6 h-6 flex items-center justify-center text-xs rounded-full mb-0.5 flex-shrink-0 ${
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
              <div className="w-full space-y-0.5">
                {dayTasks.slice(0, 2).map((t, i) => (
                  <div
                    key={i}
                    className={`w-full truncate text-[9px] leading-[14px] px-0.5 rounded ${getBarStyle(
                      t,
                      currentUser?.uid
                    )}`}
                  >
                    {t.title}
                  </div>
                ))}
                {dayTasks.length > 2 && (
                  <p className="text-[8px] text-slate-400 px-0.5 leading-3">
                    +{dayTasks.length - 2}개 더
                  </p>
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
