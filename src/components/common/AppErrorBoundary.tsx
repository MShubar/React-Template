import { ErrorBoundary } from "react-error-boundary";

function Fallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <button
          className="mt-4 rounded-md border px-4 py-2"
          onClick={() => window.location.reload()}
        >
          Reload
        </button>
      </div>
    </div>
  );
}

export default function AppErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ErrorBoundary FallbackComponent={Fallback}>{children}</ErrorBoundary>;
}