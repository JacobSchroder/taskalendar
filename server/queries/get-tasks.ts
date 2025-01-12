import 'server-only';
import { db } from '../db';
import { tasksTable } from '../db/schema';

export async function getTasks() {
  return db.select().from(tasksTable).limit(50);
}
