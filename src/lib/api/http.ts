export async function parseJson<T>(res: Response): Promise<T | void> {
  if (res.status === 204) return;

  const text = await res.text();
  return text ? JSON.parse(text) : undefined;
}
