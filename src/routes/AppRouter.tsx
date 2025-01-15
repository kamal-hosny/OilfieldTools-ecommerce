import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// layouts
import { MainLayout } from "../layouts";

// pages
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword/ForgotPassword"));
const VerifyYourEmail = lazy(() => import("../pages/ForgotPassword/VerifyYourEmail"));
const CreateNewPassword = lazy(() => import("../pages/ForgotPassword/CreateNewPassword"));

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      // errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading Home...</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "login",
          element: (
            <Suspense fallback={<div>Loading Login...</div>}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "register",
          element: (
            <Suspense fallback={<div>Loading Register...</div>}>
              <Register />
            </Suspense>
          ),
        },
        {
          path: "forgotPassword",
          element: (
            <Suspense fallback={<div>Loading Forgot Password...</div>}>
              <ForgotPassword />
            </Suspense>
          ),
        },
        {
          path: "VerifyYourEmail",
          element: (
            <Suspense fallback={<div>Loading Verify Your Email...</div>}>
              <VerifyYourEmail />
            </Suspense>
          ),
        },
        {
          path: "CreateNewPassword",
          element: (
            <Suspense fallback={<div>Loading Verify Your Email...</div>}>
              <CreateNewPassword />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
