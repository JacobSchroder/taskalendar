'use server';
import { db } from '@/server/db';
import { tasksTable } from '@/server/db/schema';
import { eq } from 'drizzle-orm';
import 'server-only';

export async function deleteTask(id: number) {
  await db.delete(tasksTable).where(eq(tasksTable.id, id));
}
