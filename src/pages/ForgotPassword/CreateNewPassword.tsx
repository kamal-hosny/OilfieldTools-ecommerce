import { useState } from "react";
import { Mail, Lock, Eye, EyeClosed } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

const CreateNewPassword = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  return (
    <div className="relative bg-section-color w-screen h-[calc(100vh-65px)] flex justify-center items-center">
    <div className="p-6 bg-main-color-background rounded space-y-6 w-96 shadow-md">
      <div className="space-y-2">
        <p className="text-lg font-semibold text-color-text-1">Create New Password</p>
        <p className="text-xs text-color-text-2">
          Your New Password Must Be Differnt form Previously Used Password
        </p>
      </div>
      <form className="text-color-text-1 space-y-4">
        {/* Password and Confirm Password */}
        <div className="flex flex-col gap-2 ">
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
                placeholder="Confirm Password"
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
            Save
          </Button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default CreateNewPassword;
