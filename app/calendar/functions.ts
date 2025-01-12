import { Dayjs } from 'dayjs';

export function getWeekDates(date: Dayjs, options?: { startOfWeek?: 'sunday' | 'monday' }) {
  const startOfWeek = options?.startOfWeek || 'sunday';
  const offset = startOfWeek === 'sunday' ? 0 : 1;
  return Array.from({ length: 7 }, (_, i) => date.set('day', (i + offset) % 6));
}
