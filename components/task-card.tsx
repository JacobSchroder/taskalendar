'use client';
import { Card, CardTitle } from '@/components/ui/card';
import { TaskRes } from '@/hooks/useTasks';
import { cn } from '@/lib/utils';
import { deleteTask } from '@/server/actions/task';
import { ListTasksResponse } from '@/server/resolvers/tasks/list-tasks';
import { useQueryClient } from '@tanstack/react-query';
import { X } from 'lucide-react';
import { Button } from './ui/button';

export function TaskCard({ task }: { task: TaskRes }) {
  const queryClient = useQueryClient();

  async function handleDelete() {
    queryClient.setQueryData(['tasks'], (oldData: ListTasksResponse) => {
      return oldData.filter((t) => t.id !== task.id);
    });
    await deleteTask(task.id);
  }

  return (
    <Card className={cn('flex justify-between', task.loading && 'animate-pulse')}>
      <div className='p-2.5'>
        <CardTitle className='mb-2'>
          <div>{task.title}</div>
        </CardTitle>
        <p className='text-xs'>{task.text}</p>
      </div>
      <div className='p-1.5'>
        <Button
          variant='ghost'
          className='p-1 h-6 w-6'
          disabled={task.loading}
          onClick={handleDelete}
        >
          <X className='h-4 w-4' />
        </Button>
      </div>
    </Card>
  );
}
