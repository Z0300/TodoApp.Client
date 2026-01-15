import { createApi } from "$lib/api/client";
import type { Todo } from "$lib/types/todo";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, fetch }) => {
  const api = createApi(fetch);

  const res = await api.get(`/api/todos/${params.id}`);

  const data: Todo = await res.json();
  return data;
};
