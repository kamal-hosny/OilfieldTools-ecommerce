import React, { useRef, useState } from "react";
import Button from "../components/ui/Button";
import { Mail } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { actAuthResendEmail, actAuthVerifyEmail } from "../store/auth/authSlice";

const VerifyYourAccount = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const location = useLocation();
    const { email } = location.state || {};

    const [emailState, setEmailState] = useState<string>(email || "")

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
        Email: emailState,
        opt: code,
    });

    if(emailState && code ){
        dispatch(
            actAuthVerifyEmail(
                {
                    Email: emailState,
                    otp: code,
                }
            )
        ).unwrap().then(() => {
            navigate("/login");
            console.log("done");
            
        }).catch((err) =>{
            console.log(err);
            
          })
    }else{
        console.log("اكمل المعلومات");
        
    }
   
    
  }


  const handleResendCode = () => {
    dispatch(
        actAuthResendEmail(
            {
                Email: emailState
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
        Verify Your Account
      </h1>

<form className="space-y-4">
      <div className="email flex flex-col gap-1.5 text-color-text-2">
            <label htmlFor="email" className="text-sm">
              Email Address
            </label>

            <div className="relative">
              <input
              onChange={(x)=>{
                
                setEmailState(x.target.value)
              }}
              value={emailState}
                type="email"
                id="email"
                className="ps-8 p-2 bg-section-color placeholder:text-color-text-2 text-color-text-1 text-sm w-full border border-color-border rounded focus:outline-none focus:ring focus:ring-cyan-400"
                placeholder="Enter your email"
              />
              <Mail
                size={16}
                className="absolute top-1/2 -translate-y-1/2 start-2 text-color-text-2"
              />
            </div>
          </div>

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

      <div>
      <Button type="button" onClick={()=>{handleVerifyClick()}} className="bg-button-color hover:bg-button-hover-color w-full text-main-color-background font-semibold">
        
        {/* <Link to="/CreateNewPassword"> */}
        Verify Email
        {/* </Link> */}
      </Button>

      </div>
      </form>
    </div>
  </div>
  )
}

export default VerifyYourAccount