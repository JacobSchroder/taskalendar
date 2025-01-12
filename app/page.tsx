'use client';

import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import DayView from './calendar/calendar-day-view';
import MonthView from './calendar/calendar-month-view';
import Sidebar from './calendar/calendar-task-sidebar';
import TopMenu from './calendar/calendar-top-menu';
import WeekView from './calendar/calendar-week-view';

type CalendarView = 'day' | 'week' | 'month';

export default function Calendar() {
  const [view, setView] = useState<CalendarView>('week');
  const [currentDate, setCurrentDate] = useState(dayjs());

  const handleViewChange = (newView: CalendarView) => {
    setView(newView);
  };

  const handleDateChange = (date: Dayjs) => {
    setCurrentDate(date);
  };

  return (
    <div className='flex flex-row h-screen pt-12 overflow-hidden'>
      <Sidebar />
      <div className='flex flex-col h-screen flex-grow'>
        <TopMenu
          view={view}
          currentDate={currentDate}
          onViewChange={handleViewChange}
          onDateChange={handleDateChange}
        />
        <div className='flex-grow overflow-auto'>
          {view === 'day' && <DayView />}
          {view === 'week' && <WeekView date={currentDate} />}
          {view === 'month' && <MonthView date={currentDate} />}
        </div>
      </div>
    </div>
  );
}
