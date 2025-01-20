'use client';
import { TaskCard } from '@/components/task-card';
import { useTasks } from '@/hooks/useTasks';
import { ListTasksResponse } from '@/server/resolvers/tasks/list-tasks';

export default function SidebarClient({ initialTasks }: { initialTasks?: ListTasksResponse }) {
  const { tasks } = useTasks({ initialTasks, refetchInterval: 5_000 });

  return (
    <div className='flex-grow overflow-auto flex flex-col gap-2.5'>
      {tasks?.data?.map((task) => <TaskCard key={task.id} task={task} />)}
    </div>
  );
}
