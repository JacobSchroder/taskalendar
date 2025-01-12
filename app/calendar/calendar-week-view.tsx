import { Dayjs } from 'dayjs';
import { getWeekDates } from './functions';

interface WeekViewProps {
  date: Dayjs;
}

export default function WeekView({ date }: WeekViewProps) {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const weekDates = getWeekDates(date);
  const days = weekDates.map((day) => day.format('ddd'));

  return (
    <div className='h-full overflow-auto'>
      <div className='flex border-b sticky left-0 top-0 bg-background'>
        <div className='w-20'></div>
        {weekDates.map((day, index) => (
          <div key={index} className='flex-1 text-center p-1 border-l'>
            <span className='font-semibold'>{days[index]}</span>{' '}
            <span className='text-muted-foreground'>{day.format('D')}</span>
          </div>
        ))}
      </div>
      {hours.map((hour) => (
        <div key={hour} className='flex border-b min-h-[60px]'>
          <div className='w-20 p-2 text-right text-sm text-muted-foreground'>{hour}:00</div>
          {weekDates.map((_, index) => (
            <div key={index} className='flex-1 border-l p-2'></div>
          ))}
        </div>
      ))}
    </div>
  );
}
