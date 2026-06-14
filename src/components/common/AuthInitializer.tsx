import { useEffect } from "react";

import Loader from "@/components/common/Loader";
import { useCurrentUser } from "@/services/queries/auth/auth.hooks";
import { useAuthStore } from "@/store/auth/authStore";

export default function AuthInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useAuthStore((state) => state.token);
  const setUser = useAuthStore((state) => state.setUser);

  const { data, isLoading } = useCurrentUser();

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);

  if (token && isLoading) {
    return <Loader text="Initializing app..." />;
  }

  return children;
}