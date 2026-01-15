export type ApiFetch = typeof fetch;

const API_BASE = import.meta.env.VITE_PUBLIC_API_BASE_URL;

export function createApi(fetchFn: ApiFetch = fetch) {
  return {
    get: (path: string, init?: RequestInit) =>
      fetchFn(`${API_BASE}${path}`, {
        credentials: "include",
        ...init,
      }),

    post: (path: string, body?: unknown, init?: RequestInit) =>
      fetchFn(`${API_BASE}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body ? JSON.stringify(body) : undefined,
        credentials: "include",
        ...init,
      }),

    put: (path: string, body?: unknown, init?: RequestInit) =>
      fetchFn(`${API_BASE}${path}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: body ? JSON.stringify(body) : undefined,
        credentials: "include",
        ...init,
      }),

    delete: (path: string, init?: RequestInit) =>
      fetchFn(`${API_BASE}${path}`, {
        method: "DELETE",
        credentials: "include",
        ...init,
      }),
  };
}
