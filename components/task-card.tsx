'use client';
import { Card, CardTitle } from '@/components/ui/card';
import { TaskRes } from '@/hooks/useTasks';
import { cn } from '@/lib/utils';
import { deleteTask } from '@/server/actions/task';
import { ListTasksResponse } from '@/server/resolvers/tasks/list-tasks';
import { useQueryClient } from '@tanstack/react-query';
import { X } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function TaskCard({ task }: { task: TaskRes }) {
  const queryClient = useQueryClient();

  async function handleDelete(e: React.MouseEvent) {
    e.stopPropagation();
    queryClient.setQueryData(['tasks'], (oldData: ListTasksResponse) => {
      return oldData.filter((t) => t.id !== task.id);
    });
    await deleteTask(task.id);
  }

  return (
    <Card className={cn(task.loading && 'animate-pulse')}>
      <div className='flex justify-between'>
        <Link href={`/tasks/${task.id}`} className='p-2.5 flex-grow'>
          <CardTitle className='mb-2'>
            <div>{task.title}</div>
          </CardTitle>
          <p className='text-xs line-clamp-2'>{task.text}</p>
        </Link>
        <div className='p-1.5 flex flex-col gap-2'>
          <Button
            variant='ghost'
            className='p-1 h-6 w-6'
            disabled={task.loading}
            onClick={handleDelete}
          >
            <X className='h-4 w-4' />
          </Button>
          <Button variant='ghost' className='p-1 h-6 w-6'>
            <span className='h-4 w-4 rounded-full bg-primary' />
          </Button>
        </div>
      </div>
      <div className='p-1.5 border-t flex justify-between'>
        <Select>
          <SelectTrigger className='w-1/2'>
            <SelectValue placeholder='Priority' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='low'>Low</SelectItem>
            <SelectItem value='medium'>Medium</SelectItem>
            <SelectItem value='high'>High</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Card>
  );
}
