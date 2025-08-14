import { env } from "@/config/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/drizzle/migrations",
  schema: "./src/drizzle/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    // url: process.env.DATABASE_URL!,
    url: env.DATABASE_URL,
  },
});
