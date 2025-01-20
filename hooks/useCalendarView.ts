'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { z } from 'zod';

export const zCalendarView = z.enum(['day', 'week', 'month']);
export type CalendarView = z.infer<typeof zCalendarView>;

export function useCalendarView() {
  const [view, setView] = useState<CalendarView>('week');
  const searchParams = useSearchParams();

  useEffect(() => {
    const v = zCalendarView.safeParse(searchParams.get('view'));
    if (v.success) {
      setView(v.data);
    }
  }, [searchParams]);

  return view;
}
