import type { Actions } from "./$types";
import { todoSchema, type TodoSchema } from "$lib/schemas/todos";
import { fail, redirect } from "@sveltejs/kit";
import z from "zod";
import { createApi } from "$lib/api/client";

export const actions = {
  default: async ({ request, fetch }) => {
    const formData = Object.fromEntries(await request.formData()) as Record<
      string,
      string
    >;

    const result = todoSchema.safeParse(formData);

    if (!result.success) {
      const errors = z.treeifyError(result.error);
      return fail(400, {
        titleError: errors.properties?.title?.errors,
        descError: errors.properties?.description?.errors,
      });
    }

    const todo: TodoSchema = result.data;

    try {
      const api = createApi(fetch);
      const res = await api.post("/api/todos", todo);

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        return fail(res.status, {
          errors: { err },
        });
      }
    } catch (error) {
      return fail(500, {
        errors: { error },
      });
    }
  },
} satisfies Actions;
