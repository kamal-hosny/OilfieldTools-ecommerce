import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// layouts
import LottieHandler from "../components/common/feedback/LottieHandler/LottieHandler";
import { MainLayout } from "../layouts";
import PageSuspenseFallback from "../components/common/feedback/PageSuspenseFallback/PageSuspenseFallback";
import Error from "../pages/Error";
import About from "../pages/About";

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
      element: (
        <Suspense fallback={
          <div className="relative login bg-section-color w-screen h-[calc(100vh-65px)] flex justify-center items-center">
            <LottieHandler type="loading" message="Loading please wait..." />
          </div>
        }>
          <MainLayout />
        </Suspense>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspenseFallback>
              <Home />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "about",
          element: (
            <PageSuspenseFallback>
              <About />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "login",
          element: (
            <PageSuspenseFallback>
              <Login />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "register",
          element: (
            <PageSuspenseFallback>
              <Register />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "forgotPassword",
          element: (
            <PageSuspenseFallback>
              <ForgotPassword />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "VerifyYourEmail",
          element: (
            <PageSuspenseFallback>
              <VerifyYourEmail />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "CreateNewPassword",
          element: (
            <PageSuspenseFallback>
              <CreateNewPassword />
            </PageSuspenseFallback>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
