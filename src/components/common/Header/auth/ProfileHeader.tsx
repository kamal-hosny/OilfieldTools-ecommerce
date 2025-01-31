import { LogOut, UserRound } from "lucide-react";
import Button from "../../../ui/Button";
import { useState, useRef, useEffect } from "react";
import { authLogout } from "../../../../store/auth/authSlice";
import { useDispatch } from "react-redux";

const ProfileHeader = () => {
    const dispatch = useDispatch()
    const [openProfile, setOpenProfile] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleOpenProfile = () => {
        setOpenProfile((prev) => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpenProfile(false);
        }
    };

    useEffect(() => {
        if (openProfile) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openProfile]);

    const handleLogout = () => {
        
        dispatch(authLogout())
        
        setOpenProfile(false)
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <Button
                onClick={handleOpenProfile}
                className="bg-transparent !text-color-text-1 hover:bg-section-color !p-2"
                aria-label="Toggle profile menu"
                aria-expanded={openProfile}
            >
                <UserRound size={20} />
            </Button>
            <ul
                className={`text-color-text-1 text-sm bg-main-color-background p-2 border-color-border border-2 transition-all w-40 absolute -bottom-10 -end-4 opacity-0 ${
                    openProfile && "opacity-100 !-bottom-[50px] !end-0"
                }`}
            >
                <li onClick={handleLogout} className="hover:bg-section-color cursor-pointer py-1 px-2 font-semibold flex items-center gap-2">
                    <LogOut size={16} />
                    <p>Sign out</p>
                </li>
            </ul>
        </div>
    );
};

export default ProfileHeader;