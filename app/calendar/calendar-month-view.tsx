import { Dayjs } from 'dayjs';
import { getMonthDays, getWeekDates } from './functions';

interface MonthViewProps {
  date: Dayjs;
}

export default function MonthView({ date }: MonthViewProps) {
  const weekDates = getWeekDates(date.startOf('month'));
  const days = weekDates.map((day) => day.format('ddd'));

  const monthDays = getMonthDays(date);

  return (
    <div className='h-full overflow-auto p-4'>
      <div className='grid grid-cols-7 gap-2'>
        {days.map((day) => (
          <div key={day} className='text-center font-semibold p-2'>
            {day}
          </div>
        ))}
        {monthDays.map((day, index) => (
          <div
            key={index}
            className={`border rounded-lg p-2 min-h-[100px] ${
              day === null ? 'bg-muted' : 'bg-background'
            }`}
          >
            {day !== null && <span className='font-semibold'>{day}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
