'use server';
import { buttonVariants } from '@/components/ui/button';
import { listTasks } from '@/server/resolvers/tasks/list-tasks';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
import SidebarClient from './calendar-task-sidebar.client';

export default async function Sidebar() {
  const initialTasks = await listTasks();

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
      <Suspense fallback={<div>Loading...</div>}>
        <SidebarClient initialTasks={initialTasks} />
      </Suspense>
    </div>
  );
}
