import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { Mail } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  forgotPasswordSchema,
  forgotPasswordType,
} from "../../validations/forgotPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/Form/Input/Input";
import { useAppDispatch } from "../../store/hooks";
import { actAuthRestPassword } from "../../store/auth/authSlice";

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<forgotPasswordType>({
    mode: "onBlur",
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit: SubmitHandler<forgotPasswordType> = (data) => {
    dispatch(
      actAuthRestPassword({
        Email: data.email,
      })
    )
      .unwrap()
      .then(() => {
        console.log("done");
        navigate("/VerifyYourEmail", {
          state: { email: data.email },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative forgot-password bg-section-color w-screen h-[calc(100vh-65px)] flex justify-center items-center">
      <div className="p-4 bg-main-color-background rounded space-y-4 w-96 shadow">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-color-text-1">
            Forgot Your Password?
          </p>
          <p className="text-xs text-color-text-2">
            Enter your email address below to receive a password reset link.
          </p>
        </div>
        <form
          className="text-color-text-1 space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Email Field */}
          <div className="email relative">
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your Email"
              register={register}
              icon={<Mail size={16} className="text-color-text-2" />}
              error={errors.email?.message}
              aria-label="Email Address"
            />
          </div>

          <div className="btn">
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`bg-button-color hover:bg-button-hover-color w-full text-main-color-background font-semibold ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Reset Link"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
