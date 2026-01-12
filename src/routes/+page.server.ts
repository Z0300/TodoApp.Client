import type { PageServerLoad, Actions } from "./$types";
import { getTodos, createTodo } from "$lib/api/todos";

export const load: PageServerLoad = async ({ fetch }) => {
  return {
    todos: await getTodos(fetch),
  };
};

export const actions = {
  create: async ({ request, fetch }) => {
    const data = await request.formData();

    const title = data.get("title")?.toString();

    const newTodo = await createTodo(title!, fetch);

    return { success: true, newTodo };
  },
} satisfies Actions;
