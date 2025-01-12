import { Dayjs } from 'dayjs';

export function getWeekDates(date: Dayjs, options?: { startOfWeek?: 'sunday' | 'monday' }) {
  const startOfWeek = options?.startOfWeek || 'monday';
  const offset = startOfWeek === 'sunday' ? 0 : 1;
  let firstWeekDay = date.startOf('week').add(offset, 'day');
  if (startOfWeek === 'monday' && date.day() === 0) {
    firstWeekDay = firstWeekDay.subtract(1, 'week');
  }
  return Array.from({ length: 7 }, (_, i) => firstWeekDay.add(i, 'day'));
}

export function getMonthDays(date: Dayjs, options?: { startOfWeek?: 'sunday' | 'monday' }) {
  const startOfWeek = options?.startOfWeek || 'monday';
  const offset = startOfWeek === 'sunday' ? 0 : 1;

  const daysInMonth = date.endOf('month').date();
  const firstDayOfMonth = date.startOf('month').day();

  const monthDays = [];
  for (let i = 0; i < firstDayOfMonth - offset; i++) {
    monthDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    monthDays.push(i);
  }
  return monthDays;
}
