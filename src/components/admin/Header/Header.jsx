import { ChevronsLeft } from "lucide-react";

import PropTypes from "prop-types";
import NavBtn from "../../shared/NavBtn/NavBtn";

export const Header = ({ collapsed, setCollapsed }) => {
  return (
    <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
      <div className="flex items-center gap-x-3">
        <button className="btn-ghost size-10" onClick={() => setCollapsed(!collapsed)}>
          <ChevronsLeft className={collapsed && "rotate-180"} />
        </button>
      </div>
      <div className="flex items-center">
        <NavBtn />
      </div>
    </header>
  );
};

Header.propTypes = {
  collapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
};
