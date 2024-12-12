import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";

const PublicLayout = () => {
  const user = useSelector((state) => state.Auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.role === "admin") {
        navigate("/admin/dashboard"); // Redirect admin to the admin-specific area
      } else {
        navigate("/"); // Redirect logged-in non-admin users to the general home page
      }
    }
  }, [user, navigate]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicLayout;
