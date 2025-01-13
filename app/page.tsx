'use server';
import dayjs from 'dayjs';
import { Suspense } from 'react';
import Sidebar from './calendar/calendar-task-sidebar';
import TopMenu from './calendar/calendar-top-menu';
import CalendarView from './calendar/calendar-view';
import WeekView from './calendar/calendar-week-view';

export default async function Calendar() {
  return (
    <div className='flex flex-row h-screen pt-12 overflow-hidden'>
      <Sidebar />
      <div className='flex flex-col h-screen flex-grow'>
        <TopMenu />
        <div className='flex-grow overflow-auto'>
          <Suspense fallback={<WeekView date={dayjs()} />}>
            <CalendarView />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
