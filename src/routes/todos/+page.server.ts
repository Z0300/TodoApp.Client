import type { PaginatedResponse } from "$lib/types/paginated";
import type { Todo } from "$lib/types/todo";
import type { PageServerLoad, Actions } from "./$types";
import { createApi } from "$lib/api/client";
import { fail } from "@sveltejs/kit";

const api = createApi(fetch);

export const load: PageServerLoad = async ({ url }) => {
  const pageNumber = Number(url.searchParams.get("pageNumber") ?? 1);
  const pageSize = Number(url.searchParams.get("pageSize") ?? 10);

  const res = await api.get(
    `/api/todos?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );

  const data: PaginatedResponse<Todo> = await res.json();

  return data;
};

export const actions = {
  complete: async ({ request }) => {
    const data = await request.formData();
    const id = data.get("id");
    const res = await api.put(`/api/todos/${id}/complete`);
    console.log("trigger complete");
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return fail(res.status, {
        errors: { err },
      });
    }
  },
  delete: async ({ request }) => {
    const data = await request.formData();
    const id = data.get("id");
    const res = await api.delete(`/api/todos/${id}`);

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return fail(res.status, {
        errors: { err },
      });
    }
  },
} satisfies Actions;
