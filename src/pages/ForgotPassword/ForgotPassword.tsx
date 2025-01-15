import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button'
import { Mail } from 'lucide-react'

const ForgotPassword = () => {
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
        <form className="text-color-text-1 space-y-4">
          <div className="email flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm">
              Email Address
            </label>

            <div className="relative text-color-text-2">
              <input
                type="email"
                id="email"
                className="ps-8 p-2 bg-section-color text-sm w-full border border-color-border rounded"
                placeholder="Enter your email"
              />
              <Mail
                size={16}
                className="absolute top-1/2 -translate-y-1/2 start-2"
              />
            </div>
          </div>

          <div className="btn">
            <Button className="bg-button-color hover:bg-button-hover-color w-full text-main-color-background font-semibold">
              <Link to={"/VerifyYourEmail"}>
              Send Reset Link
              </Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
