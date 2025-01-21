'use server';
import { db } from '@/server/db';
import { tasksTable } from '@/server/db/schema';
import { eq } from 'drizzle-orm';
import 'server-only';

export async function createTask(data: { title: string; text: string; draft: boolean }) {
  const [newTask] = await db.insert(tasksTable).values(data).returning({ id: tasksTable.id });
  if (!newTask) throw new Error('Failed to create task');
  return newTask.id;
}

export async function updateTask(id: number, data: { title: string; text: string }) {
  await db.update(tasksTable).set(data).where(eq(tasksTable.id, id));
}

export async function deleteTask(id: number) {
  await db.delete(tasksTable).where(eq(tasksTable.id, id));
}
