import dayjs, { Dayjs } from 'dayjs';
import { CALENDAR_CONFIG } from './calendar-config';
import { getWeekDates } from './functions';

interface WeekViewProps {
  date: Dayjs;
}

export default function WeekView({ date }: WeekViewProps) {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const weekDates = getWeekDates(date);

  return (
    <div className='h-full overflow-auto select-none pb-24'>
      <div className='flex border-b sticky left-0 top-0 bg-background'>
        <div className='w-20'></div>
        {weekDates.map((day, index) => (
          <div key={index} className='flex-1 text-center p-1'>
            {day.isSame(dayjs(), 'day') && (
              <span className='w-2 h-2 bg-primary rounded-full inline-block mr-2' />
            )}
            <span className='font-semibold'>{day.format('ddd')}</span>{' '}
            <span className='text-muted-foreground'>{day.format('D')}</span>
          </div>
        ))}
      </div>
      {hours.map((hour) => (
        <div key={hour} style={{ height: CALENDAR_CONFIG.hourBoxHeight }} className='flex border-b'>
          <div className='w-20 p-2 text-right text-sm text-muted-foreground'>{hour}:00</div>
          {weekDates.map((_, index) => (
            <div key={index} className='flex-1 border-l p-2'></div>
          ))}
        </div>
      ))}
    </div>
  );
}
