import { Educacion } from "@/tipos/Educacion";
import { apiFetch } from "./api";

export const educacionApi = {
  getAll: async (token: string) => {
    return await apiFetch<Educacion[]>("/api/v1/Educacion", { method: "GET" });
  },

  create: async (data: Educacion, token: string) => {
    return await apiFetch("/api/v1/Educacion", {
      method: "POST",
      body: JSON.stringify(data),
    }, token);
  },

  update: async (id: number, data: Educacion, token: string) => {
    return await apiFetch(`/api/v1/Educacion/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }, token);
  },

  delete: async (id: number, token: string) => {
    return await apiFetch(`/api/v1/Educacion/${id}`, {
      method: "DELETE",
    }, token);
  },
};
