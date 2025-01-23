import { useState } from "react";
import { Mail, Lock, Eye, EyeClosed } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useAppDispatch } from "../../store/hooks";
import { createNewPasswordSchema, createNewPasswordType } from "../../validations/createNewPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/Form/Input/Input";
import { actAuthChangePassword } from "../../store/auth/authSlice";

const CreateNewPassword = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { Email, otp } = location.state || {};

  console.log(Email, otp);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<createNewPasswordType>({
    mode: "onBlur",
    resolver: zodResolver(createNewPasswordSchema),
  });

  const onSubmit:SubmitHandler<createNewPasswordType> = (data) => {
    console.log(data);
    dispatch(actAuthChangePassword(
      {
      Email: Email,
      otp: otp,
      password: data.password,
      }
    )).unwrap().then(() => {
      navigate("/");
      console.log("done");
      
  }).catch((err) =>{
      console.log(err);
      
    })
  }


  return (
    <div className="relative bg-section-color w-screen h-[calc(100vh-65px)] flex justify-center items-center">
    <div className="p-6 bg-main-color-background rounded space-y-6 w-96 shadow-md">
      <div className="space-y-2">
        <p className="text-lg font-semibold text-color-text-1">Create New Password</p>
        <p className="text-xs text-color-text-2">
          Your New Password Must Be Differnt form Previously Used Password
        </p>
      </div>
      <form  onSubmit={handleSubmit(onSubmit)} className="text-color-text-1 space-y-4">
        {/* Password and Confirm Password */}
  {/* Password Field */}
  <div className="password relative">
            <Input
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              register={register}
              icon={<Lock size={16} className="text-color-text-2" />}
              error={errors.password?.message}
            />
            <div
              className="show-password absolute bottom-[10px] right-2 w-fit cursor-pointer text-color-text-2"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="confirmPassword relative">
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your Password"
              register={register}
              icon={<Lock size={16} className="text-color-text-2" />}
              error={errors.confirmPassword?.message}
            />
            <div
              className="show-password absolute bottom-[10px] right-2 w-fit cursor-pointer text-color-text-2"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
            </div>
          </div>

        {/* Submit Button */}
        <div className="btn">
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`bg-button-color hover:bg-button-hover-color w-full text-main-color-background font-semibold ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Saveing..." : "Save"}
            </Button>
          </div>
      </form>
    </div>
  </div>
  );
};

export default CreateNewPassword;
