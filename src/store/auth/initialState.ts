import type { AuthState } from "./types";

export const initialState: Pick<
  AuthState,
  "token" | "user"
> = {
  token: localStorage.getItem("token"),
  user: null,
};