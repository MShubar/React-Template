import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth/authStore";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useAuthStore((state) => state.token);

  return token ? children : <Navigate to="/login" replace />;
}