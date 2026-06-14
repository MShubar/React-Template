import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { loginApi } from "./auth.api";
import { useAuthStore } from "@/store/auth/authStore";

export const useLogin = () => {
  const setToken = useAuthStore((state) => state.setToken);

  return useMutation({
    mutationFn: loginApi,

    onSuccess: (data) => {
      setToken(data.token);

      toast.success("Login successful");
    },

    onError: (error) => {
      console.error(error);

      toast.error("Login failed");
    },
  });
};