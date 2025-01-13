import { ListTasksResponse } from '@/server/resolvers/tasks/list-tasks';
import { useQuery } from '@tanstack/react-query';

export function useTasks({ initialTasks }: { initialTasks?: ListTasksResponse } = {}) {
  const tasks = useQuery({
    queryKey: ['tasks'],
    queryFn: () => fetch('/api/v1/tasks').then((res) => res.json() as Promise<ListTasksResponse>),
    initialData: initialTasks,
  });

  return { tasks };
}
