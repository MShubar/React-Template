import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import ProtectedRoute from "@/routes/ProtectedRoute";

import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";

import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import RoleRoute from "@/routes/RoleRoute";
import AdminPage from "@/pages/AdminPage";
import AdminLayout from "@/layouts/AdminLayout";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: ROUTES.ADMIN,
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={["ADMIN"]}>
          <AdminLayout />
        </RoleRoute>
      </ProtectedRoute>
    ),
    children:[
      {
        index: true,  
        element: <AdminPage />,
      }
    ] 
  },
  {
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      },
    ],

  },

  {
    path: ROUTES.NOT_FOUND,
    element: <NotFoundPage />,
  },
]);