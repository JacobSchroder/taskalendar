import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dayjs } from 'dayjs';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type CalendarView = 'day' | 'week' | 'month';

interface TopMenuProps {
  view: CalendarView;
  currentDate: Dayjs;
  onViewChange: (view: CalendarView) => void;
  onDateChange: (date: Dayjs) => void;
}

export default function TopMenu({ view, currentDate, onViewChange, onDateChange }: TopMenuProps) {
  const formatDate = (date: Dayjs) => {
    return date.format('MMMM D, YYYY');
  };

  const handlePrevious = () => {
    const newDate = currentDate.subtract(1, view);
    onDateChange(newDate);
  };

  const handleNext = () => {
    const newDate = currentDate.add(1, view);
    onDateChange(newDate);
  };

  return (
    <div className='flex justify-between items-center p-4 bg-background border-b'>
      <div className='flex items-center'>
        <Button variant='ghost' size='icon' onClick={handlePrevious}>
          <ChevronLeft className='h-4 w-4' />
        </Button>
        <Button variant='ghost' size='icon' onClick={handleNext}>
          <ChevronRight className='h-4 w-4' />
        </Button>
        <h2 className='ml-2 text-xl font-semibold'>{formatDate(currentDate)}</h2>
      </div>
      <Tabs value={view} onValueChange={(value) => onViewChange(value as CalendarView)}>
        <TabsList>
          <TabsTrigger value='day'>Day</TabsTrigger>
          <TabsTrigger value='week'>Week</TabsTrigger>
          <TabsTrigger value='month'>Month</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
