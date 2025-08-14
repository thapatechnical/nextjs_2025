import {
  mysqlTable,
  varchar,
  text,
  timestamp,
  mysqlEnum,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: varchar("id", { length: 36 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  userName: varchar("username", { length: 255 }).unique(),
  password: text("password").notNull(),
  role: mysqlEnum("role", ["admin", "applicant", "employer"]).default(
    "applicant"
  ),
  avatarUrl: text("avatar_url"),
  email: varchar("email", { length: 255 }).notNull().unique(),
  emailVerifiedAt: timestamp("email_verified_at"),
  phoneNumber: varchar("phone_number", { length: 255 }),
  deletedAt: timestamp("deleted_at"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => new Date())
    .notNull(),
});
