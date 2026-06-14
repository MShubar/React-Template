import { api } from "@/api/client";

import type {
  LoginRequest,
  LoginResponse,
} from "./auth.types";

export const loginApi = async (
  payload: LoginRequest
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(
    "/auth/login",
    payload
  );

  return response.data;
};