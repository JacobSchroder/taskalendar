import { Dayjs } from 'dayjs';

export function getWeekDates(date: Dayjs, options?: { startOfWeek?: 'sunday' | 'monday' }) {
  const startOfWeek = options?.startOfWeek || 'sunday';
  const offset = startOfWeek === 'sunday' ? 0 : 1;
  let firstWeekDay = date.startOf('week').add(offset, 'day');
  if (startOfWeek === 'monday' && date.day() === 0) {
    firstWeekDay = firstWeekDay.subtract(1, 'week');
  }
  return Array.from({ length: 7 }, (_, i) => firstWeekDay.add(i, 'day'));
}
