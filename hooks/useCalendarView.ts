import { useSearchParams } from 'next/navigation';
import { z } from 'zod';

export const zCalendarView = z.enum(['day', 'week', 'month']).catch('week');
export type CalendarView = z.infer<typeof zCalendarView>;

export function useCalendarView() {
  const searchParams = useSearchParams();
  const view = zCalendarView.parse(searchParams.get('view'));

  return view;
}
