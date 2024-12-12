import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import Navbar from "../components/users/Navbar/Navbar";

const UserLoayout = () => {
  const user = useSelector((state) => state.Auth.user);
  const navgiate = useNavigate();

  useEffect(() => {
    if (!user) {
      navgiate("/login");
    }
  }, [user, navgiate]);
  return (
    <div className="bg-slate-100 dark:bg-slate-950 min-h-screen pt-4">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default UserLoayout;
