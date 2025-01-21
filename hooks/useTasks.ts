import { tasksTable } from '@/server/db/schema';
import { useQuery } from '@tanstack/react-query';
import { InferSelectModel } from 'drizzle-orm';

export type TaskRes = InferSelectModel<typeof tasksTable> & { loading?: boolean };

export function useTasks({
  initialTasks,
  refetchInterval = 1000,
}: { initialTasks?: TaskRes[]; refetchInterval?: number } = {}) {
  const tasks = useQuery({
    queryKey: ['tasks'],
    queryFn: () => fetch('/api/v1/tasks').then((res) => res.json() as Promise<TaskRes[]>),
    initialData: initialTasks,
    refetchInterval,
  });

  return { tasks };
}
