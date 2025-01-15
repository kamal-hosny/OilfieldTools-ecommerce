import { Building2, Eye, EyeClosed, Lock, Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  return (
    <div className="relative bg-section-color w-screen h-[calc(100vh-65px)] flex justify-center items-center">
      <div className="p-6 bg-main-color-background rounded space-y-6 w-96 shadow-md">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-color-text-1">Create Your Account</p>
          <p className="text-xs text-color-text-2">
            Get started with our app, just create an account and enjoy the experience.
          </p>
        </div>
        <form className="text-color-text-1 space-y-4">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="firstName">First Name</label>
              <div className="relative text-color-text-2">
                <input
                  type="text"
                  id="firstName"
                  className="ps-8 p-2 bg-section-color text-sm w-full border border-color-border rounded"
                  placeholder="First Name"
                />
                <User size={16} className="absolute top-1/2 -translate-y-1/2 start-2" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="lastName">Last Name</label>
              <div className="relative text-color-text-2">
                <input
                  type="text"
                  id="lastName"
                  className="ps-8 p-2 bg-section-color text-sm w-full border border-color-border rounded"
                  placeholder="Last Name"
                />
                <User size={16} className="absolute top-1/2 -translate-y-1/2 start-2" />
              </div>
            </div>
          </div>
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email">Email</label>
            <div className="relative text-color-text-2">
              <input
                type="email"
                id="email"
                className="ps-8 p-2 bg-section-color text-sm w-full border border-color-border rounded"
                placeholder="Email"
              />
              <Mail size={16} className="absolute top-1/2 -translate-y-1/2 start-2" />
            </div>
          </div>
          {/* Company Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="companyName">Company Name</label>
            <div className="relative text-color-text-2">
              <input
                type="text"
                id="companyName"
                className="ps-8 p-2 bg-section-color text-sm w-full border border-color-border rounded"
                placeholder="Company Name"
              />
              <Building2 size={16} className="absolute top-1/2 -translate-y-1/2 start-2" />
            </div>
          </div>
          {/* Phone Number */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phoneNumber">Phone Number</label>
            <div className="relative text-color-text-2">
              <input
                type="text"
                id="phoneNumber"
                className="ps-8 p-2 bg-section-color text-sm w-full border border-color-border rounded"
                placeholder="Phone Number"
              />
              <Phone size={16} className="absolute top-1/2 -translate-y-1/2 start-2" />
            </div>
          </div>
          {/* Password and Confirm Password */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="password">Password</label>
              <div className="relative text-color-text-2">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="ps-8 p-2 bg-section-color text-sm w-full border border-color-border rounded"
                  placeholder="Password"
                />
                <Lock size={16} className="absolute top-1/2 -translate-y-1/2 start-2" />
                <div
                  className="absolute top-1/2 -translate-y-1/2 end-2 w-fit cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="relative text-color-text-2">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="ps-8 p-2 bg-section-color text-sm w-full border border-color-border rounded"
                  placeholder="Password"
                />
                <Lock size={16} className="absolute top-1/2 -translate-y-1/2 start-2" />
                <div
                  className="absolute top-1/2 -translate-y-1/2 end-2 w-fit cursor-pointer"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
                </div>
              </div>
            </div>
          </div>
          {/* Submit Button */}
          <div>
            <Button className="bg-button-color hover:bg-button-hover-color w-full text-main-color-background font-semibold">
              Register
            </Button>
          </div>
          <div className="text-center text-sm">
            Already have an account?
            <span className="font-medium text-cyan-500 cursor-pointer"> 
            <Link to={"/login"}>
            Login
            </Link>
            
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
