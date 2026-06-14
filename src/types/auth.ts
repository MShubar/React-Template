export type UserRole = "ADMIN" | "USER" | "MANAGER";

export type AuthUser = {
    id: number;
    name: string;
    email: string;
    role: UserRole;
  };