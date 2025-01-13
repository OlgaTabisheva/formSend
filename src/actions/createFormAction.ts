"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { formSend } from "@/db/schema";
import { db } from "@/db/drizzle";

export const createForm = async ( name: string, number: number) => {
  await db.insert(formSend).values({
    name: name,
    number: number,
  });
};
