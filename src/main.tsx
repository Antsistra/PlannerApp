import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LoginPage from "@/pages/loginPage.tsx";
import RegisterPage from "@/pages/registerPage.tsx";
import ForgotPasswordPage from "@/pages/forgotPasswordPage.tsx";
import ResetPassword from "@/pages/resetPassword.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
