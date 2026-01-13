import type { Actions } from "./$types";
import { createTodo } from "$lib/api/todos";
import { todoSchema, type TodoSchema } from "$lib/schemas/todos";
import { fail } from "@sveltejs/kit";
import z from "zod";

export const actions = {
  default: async ({ request, fetch }) => {
    const formData = Object.fromEntries(await request.formData());

    const result = todoSchema.safeParse(formData);

    if (!result.success) {
      const flattened = z.flattenError(result.error);
      return fail(400, {
        errors: flattened,
      });
    }

    const todo: TodoSchema = result.data;

    const newTodo = await createTodo(todo.title, todo.description, fetch);

    return { success: true, newTodo };
  },
} satisfies Actions;
