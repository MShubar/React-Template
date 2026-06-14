import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/client";

export type User = {
  id: number;
  name: string;
  email: string;
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async (): Promise<User[]> => {
      const response = await api.get<User[]>("/users");
      return response.data;
    },
  });
};