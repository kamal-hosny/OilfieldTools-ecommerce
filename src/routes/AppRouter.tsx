import { Suspense, lazy, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// layouts
import LottieHandler from "../components/common/feedback/LottieHandler/LottieHandler";
import { MainLayout } from "../layouts";
import PageSuspenseFallback from "../components/common/feedback/PageSuspenseFallback/PageSuspenseFallback";
import Error from "../pages/Error";
import About from "../pages/About";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { checkMobileWidth } from "../store/features/mobileWidth/mobileWidthThunk";
import CartPage from "../pages/CartPage";
import VerifyYourAccount from "../pages/VerifyYourAccount";

// pages
const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const Wishlist = lazy(() => import("../pages/Wishlist"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword/ForgotPassword"));
const VerifyYourEmail = lazy(() => import("../pages/ForgotPassword/VerifyYourEmail"));
const CreateNewPassword = lazy(() => import("../pages/ForgotPassword/CreateNewPassword"));

const AppRouter = () => {

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const handleResize  = () => {
      dispatch(checkMobileWidth())
    }

    window.addEventListener("resize", handleResize);
    dispatch(checkMobileWidth())

    return () => {
      window.removeEventListener("resize", handleResize)
    }

  }, [dispatch])


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
          path: "products",
          element: (
            <PageSuspenseFallback>
              <Products />
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
          path: "wishlist",
          element: (
            <PageSuspenseFallback>
              <Wishlist />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "cart",
          element: (
            <PageSuspenseFallback>
              <CartPage />
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
          path: "VerifyYourAccount",
          element: (
            <PageSuspenseFallback>
              <VerifyYourAccount />
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
