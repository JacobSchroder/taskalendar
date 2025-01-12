import { Dayjs } from 'dayjs';

interface MonthViewProps {
  date: Dayjs;
}

export default function MonthView({ date }: MonthViewProps) {
  const daysInMonth = date.endOf('month').date();
  const firstDayOfMonth = date.startOf('month').day();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getMonthDays = () => {
    const monthDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      monthDays.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      monthDays.push(i);
    }
    return monthDays;
  };

  const monthDays = getMonthDays();

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
