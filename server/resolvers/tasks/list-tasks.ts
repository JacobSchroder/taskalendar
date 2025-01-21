'use server';
import { auth } from '@/auth';
import { db } from '@/server/db';
import { tasksTable } from '@/server/db/schema';
import { desc, eq } from 'drizzle-orm';
import 'server-only';

export async function listTasks() {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error('Unauthorized');
  }
  const userId = session.user.id;
  return db
    .select()
    .from(tasksTable)
    .where(eq(tasksTable.userId, userId))
    .orderBy(desc(tasksTable.id))
    .limit(50);
}

export type ListTasksResponse = Awaited<ReturnType<typeof listTasks>>;
