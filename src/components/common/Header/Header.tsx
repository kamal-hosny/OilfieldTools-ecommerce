import { Menu } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import DarkMode from "./DarkMode/DarkMode";
import Cart from "./Cart/Cart";
import { memo, useCallback } from "react";

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = useCallback(() => navigate("/login"), [navigate]);
  const handleRegister = useCallback(() => navigate("/register"), [navigate]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-color-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <div className="logo font-bold text-color-text-1 text-xl">
          <NavLink to="/">
          OilfieldTools
          </NavLink>
          
        </div>
        <nav className="max-md:hidden">
          <ul className="flex gap-1 justify-center items-center md:space-x-6 font-medium">
            <li>
              <NavLink to="/" className="text-color-text-2 hover:text-color-hover-text-2 active:text-color-hover-text-2">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="materials" className="text-color-text-2 hover:text-color-hover-text-2 active:text-color-hover-text-2">
                Materials
              </NavLink>
            </li>
            <li>
              <NavLink to="about" className="text-color-text-2 hover:text-color-hover-text-2 active:text-color-hover-text-2">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="o-nav flex justify-center items-center gap-3">
          <div className="action-nav flex gap-1.5 justify-center items-center">
            <DarkMode />
            <Cart />
          </div>
          <div className="btn flex gap-1.5 justify-center items-center max-md:hidden">
            <Button onClick={handleLogin} className="bg-transparent hover:bg-section-color  !text-color-text-1">
              Login
            </Button>
            <Button onClick={handleRegister} className="bg-button-color hover:bg-button-hover-color text-main-color-background">Register</Button>
          </div>
          <div className="menu md:hidden">
            <Button className="bg-transparent !text-color-text-1 hover:bg-section-color !p-2">
              <Menu size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
