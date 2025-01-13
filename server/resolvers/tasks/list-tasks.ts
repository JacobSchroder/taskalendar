import { db } from '@/server/db';
import { tasksTable } from '@/server/db/schema';
import 'server-only';

export async function listTasks() {
  return db.select().from(tasksTable).limit(50);
}
