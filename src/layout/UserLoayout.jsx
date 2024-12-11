import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";

const UserLoayout = () => {
  const user = useSelector((state) => state.Auth.user);
  const navgiate = useNavigate();

  useEffect(() => {
    if (!user) {
      navgiate("/login");
    }
  }, [user, navgiate]);
  return (
    <div>
      UserLoayout
      <Outlet />
    </div>
  );
};

export default UserLoayout;
