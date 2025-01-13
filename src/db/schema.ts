import { integer, text, pgTable } from "drizzle-orm/pg-core";
export const formSend = pgTable("formSend", {
  name: text("name").notNull(),
  number: integer("number").notNull(),
});