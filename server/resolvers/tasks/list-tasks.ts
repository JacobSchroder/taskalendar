'use server';
import { db } from '@/server/db';
import { tasksTable } from '@/server/db/schema';
import { desc } from 'drizzle-orm';
import 'server-only';

export async function listTasks() {
  return db.select().from(tasksTable).orderBy(desc(tasksTable.id)).limit(50);
}

export type ListTasksResponse = Awaited<ReturnType<typeof listTasks>>;
