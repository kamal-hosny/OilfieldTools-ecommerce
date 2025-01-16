import { Link } from "react-router-dom";
import LottieHandler from "../components/common/feedback/LottieHandler/LottieHandler";
import Button from "../components/ui/Button";

const Error = () => {
  return (
    <div className="text-center bg-main-color-background flex flex-col w-screen h-screen justify-center items-center p-4">

      <LottieHandler type="notFound" />
      <h1 className="text-2xl font-bold text-color-text-1 mb-4">Oops! Page Not Found</h1>
      <p className="text-lg text-color-text-2 mb-6">
        It seems like the page you are looking for doesn't exist.
      </p>

      <div className="flex flex-col items-center">
        <Link to="/" replace={true} className="text-color-text-1 font-medium text-lg mb-4">
          How about going back to safety?
        </Link>
        <Link to="/contact" className="text-color-text-1 font-medium text-lg">
          Contact Support
        </Link>
      </div>


      <Button
        onClick={() => window.location.reload()}
        className="mt-6 px-4 py-2 bg-button-color hover:bg-button-hover-color text-main-color-background  rounded-md font-medium"
      >
        Try Again
      </Button>
    </div>
  );
}

export default Error;
