import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      <aside>Sidebar</aside>

      <main className="flex-1">
        <header>Header</header>

        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}