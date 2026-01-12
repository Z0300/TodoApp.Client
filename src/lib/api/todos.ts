import type { Todo } from "$lib/types/todo";
import { parseJson } from "./http";

const base = import.meta.env.VITE_PUBLIC_API_BASE_URL;

export async function getTodos(fetchFn = fetch): Promise<Todo[]> {
  const res = await fetchFn(base);
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
}

export async function getTodo(id: string, fetchFn = fetch): Promise<Todo> {
  const res = await fetchFn(`${base}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch todo");
  return res.json();
}

export async function createTodo(
  title: string,
  fetchFn = fetch
): Promise<Todo> {
  const res = await fetchFn(base, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });

  if (!res.ok) throw new Error("Failed to create todo");
  return res.json();
}

export async function completeTodo(id: string, fetchFn = fetch): Promise<void> {
  const res = await fetchFn(`${base}/${id}/complete`, {
    method: "PUT",
  });

  if (!res.ok) throw new Error("Failed to complete todo");

  await parseJson(res);
}

export async function deleteTodo(id: string, fetchFn = fetch): Promise<void> {
  const res = await fetchFn(`${base}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete todo");

  await parseJson(res);
}
