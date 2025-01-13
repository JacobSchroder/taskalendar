import { CALENDAR_CONFIG } from './calendar-config';

export default function DayView() {
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className='h-full overflow-auto select-none pb-24'>
      {hours.map((hour) => (
        <div key={hour} className={`flex border-b h-[${CALENDAR_CONFIG.hourBoxHeight}px]`}>
          <div className='w-20 p-2 text-right text-sm text-muted-foreground'>{hour}:00</div>
          <div className='flex-grow p-2'></div>
        </div>
      ))}
    </div>
  );
}
