import type { AuthUser } from "@/types/auth";

export type AuthState = {
  token: string | null;
  user: AuthUser | null;

  setToken: (token: string) => void;
  setUser: (user: AuthUser) => void;
  logout: () => void;
};