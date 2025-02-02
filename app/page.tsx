'use server';
import dayjs from 'dayjs';
import { Suspense } from 'react';
import { KeyCommands } from './_components/key-commands';
import Sidebar from './calendar/calendar-task-sidebar';
import TopMenu from './calendar/calendar-top-menu';
import CalendarView from './calendar/calendar-view';
import WeekView from './calendar/calendar-week-view';

export default async function Calendar() {
  return (
    <div className='flex flex-row overflow-hidden'>
      <Sidebar />
      <div className='flex flex-col h-screen flex-grow'>
        <TopMenu />
        <div className='flex-grow overflow-auto'>
          <KeyCommands />
          <Suspense fallback={<WeekView date={dayjs()} />}>
            <CalendarView />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
