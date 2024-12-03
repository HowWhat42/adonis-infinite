import { UserRole } from '#enums/user_role'
import { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('users')
    .addColumn('id', 'uuid', (col) => col.primaryKey().notNull())
    .addColumn('created_at', 'timestamp', (col) => col.notNull())
    .addColumn('updated_at', 'timestamp', (col) => col.notNull())
    .addColumn('name', 'text', (col) => col.notNull())
    .addColumn('email', 'text', (col) => col.notNull().unique())
    .addColumn('password', 'text', (col) => col.notNull())
    .addColumn('avatar_url', 'text')
    .addColumn('role', 'int2', (col) => col.notNull().defaultTo(UserRole.User))
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('users').execute()
}
