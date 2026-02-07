import { apiFetch } from "../lib/api";

export const auth = {
  login: async (email: string, password: string) => {
    return await apiFetch<{ token: string }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  },
};
