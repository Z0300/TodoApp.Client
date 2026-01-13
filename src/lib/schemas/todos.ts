import { z } from "zod";

export const todoSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(3, "Description is required"),
});

export type TodoSchema = z.infer<typeof todoSchema>;
