import type { PageServerLoad } from "./$types";
import { createApi } from "$lib/api/client";
import type { TodosCount } from "$lib/types/count";

export const load: PageServerLoad = async ({ fetch }) => {
  const api = createApi(fetch);

  const res = await api.get("/api/todos/count");
  const todosCount: TodosCount = await res.json();

  return {
    allTodosCount: todosCount.allTodosCount,
    completedTodosCount: todosCount.completedTodosCount,
  };
};
