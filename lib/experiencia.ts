import { apiFetch } from "./api";

export function getExperiencias(token: string) {
  return apiFetch("/api/experiencia", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
