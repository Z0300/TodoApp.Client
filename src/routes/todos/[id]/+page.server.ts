import { createApi } from "$lib/api/client";
import type { Todo } from "$lib/types/todo";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

const api = createApi(fetch);

export const load: PageServerLoad = async ({ params }) => {
  const res = await api.get(`/api/todos/${params.id}`);

  const data: Todo = await res.json();
  return data;
};

export const actions = {
  complete: async ({ params }) => {
    const res = await api.put(`/api/todos/${params.id}/complete`);

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return fail(res.status, {
        errors: { err },
      });
    }
  },
  delete: async ({ params }) => {
    const res = await api.delete(`/api/todos/${params.id}`);

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return fail(res.status, {
        errors: { err },
      });
    } else {
      redirect(303, "/todos");
    }
  },
} satisfies Actions;
