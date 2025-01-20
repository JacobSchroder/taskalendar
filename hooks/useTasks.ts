import { ListTasksResponse } from '@/server/resolvers/tasks/list-tasks';
import { useQuery } from '@tanstack/react-query';

export function useTasks({
  initialTasks,
  refetchInterval = 1000,
}: { initialTasks?: ListTasksResponse; refetchInterval?: number } = {}) {
  const tasks = useQuery({
    queryKey: ['tasks'],
    queryFn: () => fetch('/api/v1/tasks').then((res) => res.json() as Promise<ListTasksResponse>),
    initialData: initialTasks,
    refetchInterval,
  });

  return { tasks };
}
