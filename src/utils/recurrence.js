import {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  getDay,
  getDate,
  startOfWeek,
  isBefore,
  isEqual,
} from 'date-fns';

// 루틴 태스크가 특정 날짜에 해당하는지 확인
export function isTaskDueOnDate(task, date) {
  if (task.type !== 'routine' || !task.isActive) return false;

  const { recurrence } = task;
  if (!recurrence) return false;

  const startDate = recurrence.startDate?.toDate
    ? recurrence.startDate.toDate()
    : new Date(recurrence.startDate);

  // 시작일 이전이면 false
  const dateNormalized = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const startNormalized = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  if (isBefore(dateNormalized, startNormalized)) return false;

  switch (recurrence.type) {
    case 'daily':
      return true;

    case 'weekly':
      return (recurrence.daysOfWeek || []).includes(getDay(date));

    case 'biweekly': {
      if (!(recurrence.daysOfWeek || []).includes(getDay(date))) return false;
      // 시작 주(일요일 기준)와 현재 주의 차이가 짝수인지 확인
      const startWeek = startOfWeek(startNormalized, { weekStartsOn: 0 });
      const currWeek = startOfWeek(dateNormalized, { weekStartsOn: 0 });
      const weeksElapsed = Math.round(
        (currWeek.getTime() - startWeek.getTime()) / (7 * 24 * 60 * 60 * 1000)
      );
      return weeksElapsed % 2 === 0;
    }

    case 'monthly':
      return getDate(date) === (recurrence.dayOfMonth || getDate(startNormalized));

    case 'quarterly': {
      const startMonth = startNormalized.getMonth();
      const currMonth = date.getMonth();
      const monthDiff =
        (date.getFullYear() - startNormalized.getFullYear()) * 12 + (currMonth - startMonth);
      return monthDiff % 3 === 0 && getDate(date) === getDate(startNormalized);
    }

    case 'yearly':
      return (
        date.getMonth() === startNormalized.getMonth() &&
        getDate(date) === getDate(startNormalized)
      );

    default:
      return false;
  }
}

// 해당 월에 루틴 태스크가 나타나는 날짜 목록 반환
export function getOccurrencesInMonth(task, year, month) {
  const monthStart = startOfMonth(new Date(year, month, 1));
  const monthEnd = endOfMonth(monthStart);
  const allDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
  return allDays.filter((day) => isTaskDueOnDate(task, day));
}

// 일회성 태스크가 해당 날짜에 표시되는지 확인
export function isOneTimeDueOnDate(task, date) {
  if (task.type !== 'one-time' || !task.isActive) return false;
  if (!task.dueDate) return false;
  const due = task.dueDate?.toDate ? task.dueDate.toDate() : new Date(task.dueDate);
  return (
    due.getFullYear() === date.getFullYear() &&
    due.getMonth() === date.getMonth() &&
    due.getDate() === date.getDate()
  );
}

// 완료 기록을 위한 periodKey 생성 (날짜 기반)
export function getPeriodKey(date) {
  return format(date, 'yyyy-MM-dd');
}

export const RECURRENCE_LABELS = {
  daily: '매일',
  weekly: '매주',
  biweekly: '격주',
  monthly: '매달',
  quarterly: '분기',
  yearly: '매년',
};

export const DAY_LABELS = ['일', '월', '화', '수', '목', '금', '토'];
