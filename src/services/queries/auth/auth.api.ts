import { api } from "@/api/client";

import type { AuthUser } from "@/types/auth";

export const getCurrentUserApi = async (): Promise<AuthUser> => {
  const response = await api.get<AuthUser>(
    "/auth/me"
  );

  return response.data;
};