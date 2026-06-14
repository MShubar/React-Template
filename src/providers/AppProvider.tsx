import type { ReactNode } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

import { queryClient } from "@/services/queryClient";
import AppErrorBoundary from "@/components/common/AppErrorBoundary";
import AuthInitializer from "@/components/common/AuthInitializer";

type AppProviderProps = {
  children: ReactNode;
};

export default function AppProvider({
  children,
}: AppProviderProps) {
  return (
    <AppErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AuthInitializer>
          {children}
        </AuthInitializer>
        <Toaster
          richColors
          position="top-right"
          closeButton
        />
      </QueryClientProvider>
    </AppErrorBoundary>
  );
}