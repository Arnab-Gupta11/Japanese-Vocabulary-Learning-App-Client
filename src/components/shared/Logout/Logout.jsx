import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { post } from "../../../services/ApiEndpoint";
import { LogoutUser } from "../../../redux/slice/AuthSLice";

const Logout = () => {
  // const user = useSelector((state) => state.Auth.user);
  // console.log(user);
  const navigate = useNavigate();
  const disptach = useDispatch();
  const handleLogout = async () => {
    try {
      const request = await post("/auth/logout");
      // const resspone = request.data;
      if (request.status == 200) {
        console.log("Inside redux");
        disptach(LogoutUser());
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      className="bg-gradient-to-r from-violet-700 to-violet-500 hover:bg-gradient-to-l hover:scale-105 active:scale-95 duration-700 text-white px-6 py-2 rounded-md font-medium"
      onClick={handleLogout}
    >
      logout
    </button>
  );
};

export default Logout;
