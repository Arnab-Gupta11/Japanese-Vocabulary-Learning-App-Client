import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import Navbar from "../components/users/Navbar/Navbar";
import Footer from "../components/users/Footer/Footer";

const UserLoayout = () => {
  const user = useSelector((state) => state.Auth.user);
  const navgiate = useNavigate();

  useEffect(() => {
    if (!user) {
      navgiate("/login");
    }
  }, [user, navgiate]);
  return (
    <div className="bg-slate-100 dark:bg-slate-950 pt-4 overflow-hidden">
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserLoayout;
