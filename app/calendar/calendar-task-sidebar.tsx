'use server';
import { TaskCard } from '@/components/task-card';
import { buttonVariants } from '@/components/ui/button';
import { listTasks } from '@/server/resolvers/tasks/list-tasks';
import { PlusCircle } from 'lucide-react';

import Link from 'next/link';
export default async function Sidebar() {
  const tasks = await listTasks();

  return (
    <div className='w-[300px] h-full bg-background border-r p-4 flex flex-col'>
      <h2 className='text-lg font-semibold mb-4'>Tasks</h2>
      <div className='mb-4'>
        <Link
          href='/tasks/new'
          className={buttonVariants({ variant: 'default', size: 'default', className: 'w-full' })}
        >
          <PlusCircle className='h-4 w-4' />
          New Task
        </Link>
      </div>
      <div className='flex-grow overflow-auto'>
        {tasks?.map((task) => <TaskCard key={task.id} task={task} />)}
      </div>
    </div>
  );
}
