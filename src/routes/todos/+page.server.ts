import type { PaginatedResponse } from "$lib/types/paginated";
import type { Todo } from "$lib/types/todo";
import type { PageServerLoad } from "./$types";
import { createApi } from "$lib/api/client";

export const load: PageServerLoad = async ({ fetch, url }) => {
  const pageNumber = Number(url.searchParams.get("pageNumber") ?? 1);
  const pageSize = Number(url.searchParams.get("pageSize") ?? 10);

  const api = createApi(fetch);

  const res = await api.get(
    `/api/todos?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );

  const data: PaginatedResponse<Todo> = await res.json();

  return data;
};
