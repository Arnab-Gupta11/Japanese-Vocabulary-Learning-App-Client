import { Moon, Sun } from "lucide-react";
import ImageDropdown from "../ImageDropdown/ImageDropdown";
import Logout from "../Logout/Logout";
import { useSelector } from "react-redux";
import { useTheme } from "../../../hooks/useTheme";

const NavBtn = () => {
  const { theme, setTheme } = useTheme();
  const user = useSelector((state) => state.Auth.user);
  return (
    <div className="flex items-center">
      <button className="btn-ghost size-10" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <Sun size={22} className="dark:hidden" />
        <Moon size={22} className="hidden dark:block" />
      </button>
      {user && (
        <div className="flex items-center gap-4">
          <ImageDropdown />
          <Logout />
        </div>
      )}
    </div>
  );
};

export default NavBtn;
