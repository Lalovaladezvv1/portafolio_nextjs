//const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const API_URL = "https://apidonetportfolio.onrender.com";


import { useAuth } from "../context/AuthContext";

export async function apiFetch<T>(
  path: string,
  options: RequestInit = {},
  token?: string
): Promise<T> {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  if (options.headers) {
    if (options.headers instanceof Headers) {
      options.headers.forEach((value, key) => headers.append(key, value));
    } else if (Array.isArray(options.headers)) {
      options.headers.forEach(([key, value]) => headers.append(key, value));
    } else {
      Object.entries(options.headers).forEach(([key, value]) => {
        headers.append(key, value as string);
      });
    }
  }
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    throw new Error(res.status.toString());
  }

  return res.json();
}
