'use server';
import { db } from '@/server/db';
import { tasksTable } from '@/server/db/schema';
import 'server-only';

export async function createTask(task: { title: string; text: string }) {
  await db.insert(tasksTable).values(task);
}
