import { NavLink } from "react-router";
import NavBtn from "../../shared/NavBtn/NavBtn";

const Navbar = () => {
  return (
    <div className="mx-4 lg:mx-0">
      <div className="navbar max-w-screen-xl mx-auto bg-slate-50 dark:bg-slate-900 shadow-light-container-shadow dark:shadow-dark-container-shadow rounded-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-slate-50 dark:bg-slate-900 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <a className="btn btn-ghost text-xl mb-5">Logo</a>
              <li className="text-slate-800 dark:text-slate-300 font-medium mb-3">
                <NavLink
                  to="/lessons"
                  className={({ isActive }) => (isActive ? " shadow-navlink-shadow rounded-md px-2 text-slate-800 dark:text-slate-300" : "")}
                >
                  <h1 className="text-center w-12">Lessons</h1>
                </NavLink>
              </li>
              <li className="text-slate-800 dark:text-slate-300 font-medium text-center">
                <NavLink
                  to="/tutorials"
                  className={({ isActive }) => (isActive ? " shadow-navlink-shadow rounded-md px-2 text-slate-800 dark:text-slate-300" : "")}
                >
                  Tutorials
                </NavLink>
              </li>
            </ul>
            <a className="btn btn-ghost text-xl lg:flex">Logo</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-slate-800 dark:text-slate-300 font-medium">
              <NavLink
                to="/lessons"
                className={({ isActive }) => (isActive ? " shadow-navlink-shadow rounded-md px-2 text-slate-800 dark:text-slate-300" : "")}
              >
                Lessons
              </NavLink>
            </li>
            <li className="text-slate-800 dark:text-slate-300 font-medium">
              <NavLink
                to="/tutorials"
                className={({ isActive }) => (isActive ? " shadow-navlink-shadow rounded-md px-2 text-slate-800 dark:text-slate-300" : "")}
              >
                Tutorials
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavBtn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
