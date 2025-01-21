import { sql } from 'drizzle-orm';
import { boolean, integer, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';

const createdAt = timestamp({ mode: 'string', withTimezone: true })
  .notNull()
  .default(sql`now()`);

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  createdAt,
});

export const tasksTable = pgTable('tasks', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  text: text().notNull(),
  userId: integer().references(() => usersTable.id),
  draft: boolean().notNull().default(false),
  createdAt,
});
