'use client';
import { useCalendarView } from '@/hooks/useCalendarView';
import dayjs from 'dayjs';
import DayView from './calendar-day-view';
import MonthView from './calendar-month-view';
import WeekView from './calendar-week-view';

export default function CalendarView() {
  const view = useCalendarView();
  const date = dayjs();
  if (view === 'day') {
    return <DayView />;
  } else if (view === 'month') {
    return <MonthView date={date} />;
  }
  return <WeekView date={date} />;
}
