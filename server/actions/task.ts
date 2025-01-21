'use server';
import { auth } from '@/auth';
import { db } from '@/server/db';
import { tasksTable } from '@/server/db/schema';
import { and, eq } from 'drizzle-orm';
import 'server-only';

export async function createTask(data: { title: string; text: string; draft: boolean }) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error('Unauthorized');
  }

  const userId = session.user.id;
  const [newTask] = await db
    .insert(tasksTable)
    .values({ ...data, userId })
    .returning({ id: tasksTable.id });

  if (!newTask) throw new Error('Failed to create task');
  return newTask.id;
}

export async function updateTask(id: number, data: { title: string; text: string }) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    throw new Error('Unauthorized');
  }

  const match = await db
    .select()
    .from(tasksTable)
    .where(and(eq(tasksTable.id, id), eq(tasksTable.userId, userId)));

  if (!match) throw new Error('Task not found');

  await db
    .update(tasksTable)
    .set(data)
    .where(and(eq(tasksTable.id, id), eq(tasksTable.userId, userId)));
}

export async function deleteTask(id: number) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    throw new Error('Unauthorized');
  }

  const match = await db
    .select()
    .from(tasksTable)
    .where(and(eq(tasksTable.id, id), eq(tasksTable.userId, userId)));

  if (!match) throw new Error('Task not found');

  await db.delete(tasksTable).where(eq(tasksTable.id, id));
}
