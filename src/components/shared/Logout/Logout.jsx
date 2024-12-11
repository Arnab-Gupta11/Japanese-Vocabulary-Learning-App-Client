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
    <button className="bg-green-300 px-4 py-2 rounded-md text-white" onClick={handleLogout}>
      logout
    </button>
  );
};

export default Logout;
