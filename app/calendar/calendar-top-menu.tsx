'use client';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCalendarView, zCalendarView } from '@/hooks/useCalendarView';
import { useCalendarViewChange } from '@/hooks/useCalendarViewChange';
import dayjs, { Dayjs } from 'dayjs';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TopMenu() {
  const handleViewChange = useCalendarViewChange();
  const view = useCalendarView();

  const formatDate = (date: Dayjs) => {
    return date.format('MMMM D, YYYY');
  };

  return (
    <div className='flex justify-between items-center p-4 bg-background border-b'>
      <div className='flex items-center'>
        <Button variant='ghost' size='icon'>
          <ChevronLeft className='h-4 w-4' />
        </Button>
        <Button variant='ghost' size='icon'>
          <ChevronRight className='h-4 w-4' />
        </Button>
        <h2 className='ml-2 text-xl font-semibold'>{formatDate(dayjs())}</h2>
      </div>
      <Tabs value={view} onValueChange={(value) => handleViewChange(zCalendarView.parse(value))}>
        <TabsList>
          <TabsTrigger value='day'>Day</TabsTrigger>
          <TabsTrigger value='week'>Week</TabsTrigger>
          <TabsTrigger value='month'>Month</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
