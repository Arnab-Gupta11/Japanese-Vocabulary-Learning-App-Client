import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { post } from "../services/ApiEndpoint";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../redux/slice/AuthSLice";
import { ImSpinner } from "react-icons/im";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.Auth);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //email password register
  const onSubmit = async (data) => {
    // console.log(data);
    try {
      setLoading(true);
      const currentUser = {
        email: data.email,
        password: data.password,
      };
      //Send data to server
      const request = await post("/auth/login", currentUser);
      const response = request.data;
      // console.log("data :----->", response.data);
      if (response) {
        toast.success("User LoggedIn Successfully");
        dispatch(SetUser(response.data));
        if (response?.data?.role == "admin") {
          navigate("/admin/dashboard");
        } else if (response?.data?.role == "user") {
          navigate("/");
        }
      }

      reset();
    } catch (err) {
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 z-0 pt-10 md:pt-20">
      {/* <Helmet>
        <title>Inventohub | Register</title>
      </Helmet> */}
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col py-8 items-center">
          <div className="w-11/12 md:10/12 lg:w-4/12 bg-white dark:bg-slate-900 rounded-lg mx-auto shadow-light-container-shadow dark:shadow-dark-container-shadow pb-4">
            <div className="text-center mb-3 mt-8">
              <div className="grid place-items-center">{/* <NavbarTitle /> */}</div>
              <h1 className="text-xl xsm:text-2xl sm:text-4xl lg:px-5 font-bold pt-5 text-slate-900 dark:text-slate-100 ">Login to your account</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="px-4 py-3 w-full rounded-lg  outline-none border-none bg-transparent font-medium text-slate-800 dark:text-slate-300 mt-4 bg-slate-200 dark:bg-slate-950"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span className="text-red-700 text-xs font-medium mt-0 ml-1">Email is required</span>}
                </div>
                <div className="form-control mb-4">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="px-4 py-3 w-full rounded-lg  outline-none border-none bg-transparent font-medium text-slate-800 dark:text-slate-300 mt-4 bg-slate-200 dark:bg-slate-950"
                      {...register("password", {
                        required: true,
                        pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/,
                      })}
                    />
                    <span
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      className="absolute top-8 right-4 cursor-pointer text-slate-500"
                    >
                      {showPassword ? <AiOutlineEye size={16} /> : <AiOutlineEyeInvisible size={16} />}
                    </span>
                    {errors.password?.type === "required" && <span className="text-red-700 text-xs font-medium mt-0 ml-1">Password is required</span>}
                    {errors.password?.type === "pattern" && (
                      <p className="text-green-500 text-xs font-medium mt-1 ml-1 text-justify">
                        Password must contain at least 6 characters, at least 1 capital letter, and at least 1 special character.
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-control mt-6 p-0">
                  <button className="bg-gradient-to-r from-violet-700 to-violet-500 hover:bg-gradient-to-l hover:scale-105 active:scale-95 duration-700 text-white px-6 py-2 rounded-md flex justify-center">
                    {loading ? <ImSpinner className="animate-spin" /> : "Sign In"}
                  </button>
                </div>
              </form>
              <p className="text-slate-700 dark:text-slate-300 font-medium mt-1">
                Dont have an account?
                <Link to="/register" className="text-violet-500 text-base hover:text-violet-600 hover:underline font-semibold ml-1">
                  Please Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
