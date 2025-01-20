import { ReactNode, memo, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../../../ui/Button";

interface INavbarMobile {
    open: boolean;
    closeMenu: () => void
}

const NavbarMobile = memo(({open, closeMenu}: INavbarMobile) => {
    const navigate = useNavigate();

    const handleLogin = useCallback(() => navigate("/login"), [navigate]);
    const handleRegister = useCallback(() => navigate("/register"), [navigate]);



  return (
<div 
  className={`flex flex-col gap-4 p-4 text-color-text-1 bg-main-color-background fixed w-screen h-screen z-50 transition-transform duration-300`}
  style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
>

        <ul className="flex flex-col gap-4">
            <li className="">
            <NavLink to={"/"} onClick={closeMenu} className={"bg-section-color w-full px-3 py-2 block font-medium "}>Home</NavLink>
            </li>
            <li>
            <NavLink to={"/products"} onClick={closeMenu} className={"bg-section-color w-full px-3 py-2 block font-medium "}>Products</NavLink>
            </li>
            <li>
            <NavLink to={"/about"} onClick={closeMenu} className={"bg-section-color w-full px-3 py-2 block font-medium "}>About</NavLink>
            </li>
            <li>
            <NavLink to={"/contact"} onClick={closeMenu} className={"bg-section-color w-full px-3 py-2 block font-medium "}>Contact</NavLink>
            </li>
        </ul>
        <div className="flex justify-between items-center gap-1">
            <Button onClick={()=>{
                closeMenu()
                handleLogin()
            }} className="bg-button-color hover:bg-button-hover-color text-main-color-background w-full">Login</Button>
            <Button onClick={()=>{
                closeMenu()
                handleRegister()
            }} className="bg-button-color hover:bg-button-hover-color text-main-color-background w-full">Register</Button>
        </div>
    </div>
  )
})

export default NavbarMobile