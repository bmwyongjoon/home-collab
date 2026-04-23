import {
  format,
  isToday,
  isTomorrow,
  isYesterday,
  isPast,
  formatDistanceToNow,
  startOfDay,
} from 'date-fns';
import { ko } from 'date-fns/locale';

export function toDate(value) {
  if (!value) return null;
  if (value?.toDate) return value.toDate();
  if (value instanceof Date) return value;
  return new Date(value);
}

export function formatDate(value) {
  const date = toDate(value);
  if (!date) return '';
  if (isToday(date)) return '오늘';
  if (isTomorrow(date)) return '내일';
  if (isYesterday(date)) return '어제';
  return format(date, 'M월 d일 (E)', { locale: ko });
}

export function formatDateTime(value) {
  const date = toDate(value);
  if (!date) return '';
  return format(date, 'M월 d일 HH:mm', { locale: ko });
}

export function formatRelative(value) {
  const date = toDate(value);
  if (!date) return '';
  return formatDistanceToNow(date, { addSuffix: true, locale: ko });
}

export function isOverdue(value) {
  const date = toDate(value);
  if (!date) return false;
  return isPast(startOfDay(date)) && !isToday(date);
}

export function formatMonthYear(year, month) {
  return format(new Date(year, month, 1), 'yyyy년 M월', { locale: ko });
}
