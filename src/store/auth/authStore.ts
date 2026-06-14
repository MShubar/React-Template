import { create } from "zustand";

import { initialState } from "./initialState";
import type { AuthState } from "./types";

export const useAuthStore = create<AuthState>((set) => ({
  ...initialState,

  setToken: (token) => {
    localStorage.setItem("token", token);
    set({
      token,
    });
  },

  setUser: (user) => {
    set({
      user,
    });
  },

  logout: () => {
    localStorage.removeItem("token");
    set({
      token: null,
      user: null,
    });
  },
}));