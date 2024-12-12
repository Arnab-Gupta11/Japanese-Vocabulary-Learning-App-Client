import { ChevronsLeft, Moon, Sun } from "lucide-react";

import PropTypes from "prop-types";
import { useTheme } from "../../../hooks/useTheme";
import Logout from "../../shared/Logout/Logout";
import ImageDropdown from "../../shared/ImageDropdown/ImageDropdown";
import { useSelector } from "react-redux";

export const Header = ({ collapsed, setCollapsed }) => {
  const { theme, setTheme } = useTheme();
  const user = useSelector((state) => state.Auth.user);
  return (
    <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
      <div className="flex items-center gap-x-3">
        <button className="btn-ghost size-10" onClick={() => setCollapsed(!collapsed)}>
          <ChevronsLeft className={collapsed && "rotate-180"} />
        </button>
      </div>
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
    </header>
  );
};

Header.propTypes = {
  collapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
};
