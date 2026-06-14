import { queryKeys } from "@/api/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUserApi } from "./auth.api";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: queryKeys.auth.me,
    queryFn: getCurrentUserApi,
    retry: false,
  });
};