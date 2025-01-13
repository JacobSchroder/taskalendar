import { listTasks } from '@/server/resolvers/tasks/list-tasks';

export async function GET() {
  const tasks = await listTasks();
  return Response.json(tasks);
}
