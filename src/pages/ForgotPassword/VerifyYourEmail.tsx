import React, { useRef } from "react";
import Button from "../../components/ui/Button";
import { useAppDispatch } from "../../store/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { actAuthResendEmail, actAuthVerifyEmail } from "../../store/auth/authSlice";

const VerifyYourEmail = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  

  const handleInputChange  = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if(/^\d*$/.test(value)){ //nums only
      if(value.length === 1 && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
      e.target.value = "";
    }
  };

  const handleKeyDown  = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleVerifyClick = () => {
    const code = inputRefs.current.map((input) => input?.value || "").join("")

    console.log( {
        Email: email,
        opt: code,
    });

    if(email && code ){
      navigate("/CreateNewPassword", {
        state:                 {
          Email: email,
          otp: code,
      },
      });
      console.log("done");
    }else{
        console.log("اكمل المعلومات");
        
    }
   
    
  }


  const handleResendCode = () => {
    dispatch(
        actAuthResendEmail(
            {
                Email: email
            }
        )
    ).unwrap().then(() => {
        console.log("done");
        
    }).catch((err) =>{
        console.log(err);
        
      })
  }


  return (
    <div className="relative flex flex-col items-center justify-center bg-section-color w-screen h-screen">
      <div className="p-6 bg-main-color-background rounded-lg shadow-md w-80 space-y-6">
        <h1 className="text-lg font-semibold text-center text-color-text-1">
          Verify Your Email
        </h1>
        <p className="text-sm text-center text-color-text-2">
          Please Enter The 4-Digit Code Sent To <br />
          <span className="font-semibold">{email}</span>
        </p>
        <div className="flex justify-center gap-2">
         {[0, 1, 2, 3].map((_, index) => (
          <input 
          key={index} 
          ref={(el) => (inputRefs.current[index] = el)} 
          type="text" 
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          className="w-12 h-12 text-center bg-section-color text-color-text-1 border border-color-border rounded-lg text-lg focus:outline-none focus:ring focus:ring-cyan-400"
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}

          />
         ))}
        </div>

        <p onClick={handleResendCode} className="text-cyan-400 hover:text-cyan-600 cursor-pointer text-center">Resend Code</p>

        <Button onClick={()=>{handleVerifyClick()}} className="bg-button-color hover:bg-button-hover-color w-full text-main-color-background font-semibold">
          
          {/* <Link to="/CreateNewPassword"> */}
          Verify
          {/* </Link> */}
        </Button>
      </div>
    </div>
  );
};

export default VerifyYourEmail;