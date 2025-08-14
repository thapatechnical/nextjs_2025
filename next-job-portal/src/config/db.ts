import { drizzle } from "drizzle-orm/mysql2";
import { env } from "./env";
export const db = drizzle(env.DATABASE_URL);
