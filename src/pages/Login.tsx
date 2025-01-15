import { Eye, EyeClosed, Lock, Mail } from "lucide-react";
import { useState } from "react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setshowPassword] = useState<boolean>(false);

  return (
    <div className="relative login bg-section-color w-screen h-[calc(100vh-65px)] flex justify-center items-center ">
      <div className="p-4 bg-main-color-background rounded space-y-4 w-96 shadow">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-color-text-1">
            Login Your Account
          </p>
          <p className="text-xs text-color-text-2">
            Get started with our app, just create an account and enjoy the
            experince
          </p>
        </div>
        <form className="text-color-text-1 space-y-4">
          <div className="email flex flex-col gap-1.5">
            <label htmlFor="">Email</label>

            <div className="relative text-color-text-2">
              <input
                type="email"
                className="ps-8 p-2 bg-section-color text-sm w-full border border-color-border rounded"
                placeholder="Enter your Email"
              />
              <Mail
                size={16}
                className="absolute top-1/2 -translate-y-1/2 start-2"
              />
            </div>
          </div>
          <div className="password flex flex-col gap-1.5 ">
            <label htmlFor="">Password</label>
            <div className="relative text-color-text-2">
              <input
                type={showPassword ? "text" : "password"}
                className="ps-8 p-2 bg-section-color text-sm w-full border border-color-border rounded"
                placeholder="Password"
              />
              <Lock
                size={16}
                className="absolute top-1/2 -translate-y-1/2 start-2"
              />
              <div
                className="show-password absolute top-1/2 -translate-y-1/2 end-2 w-fit cursor-pointer"
                onClick={() => {
                  setshowPassword((prev) => !prev);
                }}
              >
                {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
              </div>
            </div>
          </div>
          <div className="forgot-password flex justify-end">
              
              <Link to={"/forgotPassword"} className="text-xs font-medium text-cyan-500 cursor-pointer">
              Forgot password?
              </Link>
          </div>
          <div className="btn">
            <Button className="bg-button-color hover:bg-button-hover-color w-full text-main-color-background font-semibold">
              Login
            </Button>
          </div>
          <div className="dont-account text-center text-sm">
            Don't have an account? {" "}
            <span className="font-medium text-cyan-500 cursor-pointer">
              <Link to={"/register"}>
              Sign Up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
