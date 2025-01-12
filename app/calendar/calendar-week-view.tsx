import { Dayjs } from 'dayjs';
import { getWeekDates } from './functions';

interface WeekViewProps {
  date: Dayjs;
}

export default function WeekView({ date }: WeekViewProps) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const hours = Array.from({ length: 24 }, (_, i) => i);

  const weekDates = getWeekDates(date, { startOfWeek: 'monday' });

  return (
    <div className='h-full overflow-auto'>
      <div className='flex border-b'>
        <div className='w-20'></div>
        {weekDates.map((day, index) => (
          <div key={index} className='flex-grow text-center p-2'>
            <div className='font-semibold'>{days[index]}</div>
            <div className='text-sm text-muted-foreground'>{day.format('D')}</div>
          </div>
        ))}
      </div>
      {hours.map((hour) => (
        <div key={hour} className='flex border-b min-h-[60px]'>
          <div className='w-20 p-2 text-right text-sm text-muted-foreground'>{hour}:00</div>
          {weekDates.map((_, index) => (
            <div key={index} className='flex-grow border-l p-2'></div>
          ))}
        </div>
      ))}
    </div>
  );
}
