import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FiAlertCircle, FiCheck, FiUpload } from "react-icons/fi";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import imageUpload from "../api/utils";
import { post } from "../services/ApiEndpoint";
const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  // useEffect(() => {
  //   const currentMode = localStorage.getItem("mode") || "light";
  //   document.documentElement.classList.add(currentMode);
  // }, []);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  //email password register
  const onSubmit = async (data) => {
    console.log(data);
    const image = data.image[0];
    try {
      //1.upload image
      const imageData = await imageUpload(image);

      const currentUser = {
        email: data.email,
        name: data.name,
        image: imageData || "abc",
        password: data.password,
      };
      //Send data to server
      const request = await post("/api/v1/users/create-user", currentUser);
      const response = request.data;
      if (response) {
        toast.success("User Created Successfully");
      }

      reset();
      navigate("/login");
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }

    return {};
  };

  return (
    <div className="min-h-screen bg-light-bg-200 dark:bg-dark-bg-300 z-0 pt-0 md:pt-10 font-Work-Sans">
      {/* <Helmet>
        <title>Inventohub | Register</title>
      </Helmet> */}
      <Toaster></Toaster>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col py-8 items-center">
          <div className="w-11/12 md:10/12 lg:w-4/12 bg-light-bg-100 rounded-lg mx-auto shadow-md shadow-light-bg-400 ">
            <div className="text-center mb-3 mt-8">
              <div className="grid place-items-center">{/* <NavbarTitle /> */}</div>
              <h1 className="text-xl xsm:text-2xl sm:text-4xl lg:px-5 font-bold pt-10 text-light-text-100 dark:text-dark-text-100 text-red-600">
                Register now!
              </h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Full name"
                    name="name"
                    className="px-4 py-3 w-full rounded-lg shadow-inner shadow-violet-300 dark:shadow-dark-bg-300 outline-none border-none bg-transparent font-medium text-slate-600 dark:text-dark-text-200"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span className="text-red-700 text-xs font-medium mt-0 ml-1">Name is required</span>}
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="px-4 py-3 w-full rounded-lg shadow-inner shadow-violet-300 dark:shadow-dark-bg-300 outline-none border-none bg-transparent font-medium text-slate-600 dark:text-dark-text-200 mt-4"
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
                      className="px-4 py-3 w-full rounded-lg shadow-inner shadow-violet-300 dark:shadow-dark-bg-300 outline-none border-none bg-transparent mt-4 font-medium text-slate-600 dark:text-dark-text-200"
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

                <div className="form-control">
                  <div className="flex items-center mt-4 gap-3">
                    {/* File Upload Button */}
                    <label
                      htmlFor="file_input"
                      className="cursor-pointer flex items-center justify-center px-4 py-2 bg-[#5356FB] text-white font-medium rounded-lg shadow-md hover:bg-[#0B6FFC] transition-all duration-300 flex-1"
                    >
                      <FiUpload className="w-5 h-5 mr-2" /> {/* React Icon */}
                      Upload Image
                    </label>

                    {/* Hidden File Input */}
                    <input className="hidden" id="file_input" type="file" accept="image/*" {...register("image", { required: true })} />

                    {/* Display Selected File Name */}
                    <p className="text-sm text-slate-500 dark:text-dark-slate-700 font-medium flex-1">
                      {watch("image")?.[0]?.name ? `${watch("image")[0].name}` : "No file selected"}
                    </p>
                  </div>

                  <p className=" text-sm text-gray-500" id="file_input_help ">
                    {errors.image && <span className="text-red-700 text-xs font-medium mt-0 ml-1">Image is required</span>}
                  </p>
                </div>

                <div className="flex gap-2 items-center relative mt-4">
                  {/* Checkbox Input */}
                  <input
                    type="checkbox"
                    id="some_id"
                    name="agree"
                    className={`peer appearance-none w-4 h-4 border-2 rounded-sm bg-white transition-colors border-blue-500 checked:border-none checked:bg-blue-800
                      ${errors.agree && "border-red-600"}
                      `}
                    {...register("agree", { required: true })}
                  />

                  {/* Checkbox Label */}
                  <label htmlFor="some_id" className="text-sm font-medium text-light-text-200 dark:text-dark-text-200">
                    I agree to the terms and conditions
                  </label>

                  {/* React Icon Checkmark (Visible when checked) */}
                  <FiCheck className={`absolute top-[5px] left-[3px] w-3 h-3  text-white hidden peer-checked:block pointer-events-none`} />
                </div>

                {/* Error Message */}
                {errors.agree && (
                  <div className="flex items-center mt-1 text-red-700 text-xs font-medium ml-5">
                    <FiAlertCircle className="mr-1" />
                    You must agree to continue
                  </div>
                )}

                <div className="form-control mt-6 p-0">
                  {/* <Button variant={"default"} className={"w-full"}>
                    Register
                  </Button> */}
                  <button className="bg-red-700">Register</button>
                </div>
              </form>
              <p className="text-light-text-200 dark:text-dark-text-200 font-medium mt-1">
                Already have an account?
                <Link to="/login" className="text-[#FF792E] text-base hover:text-[#FF792E] hover:underline font-semibold ml-1">
                  Please Login
                </Link>
              </p>
              <div className="my-5 border-[0.5px] border-light-bg-400 dark:border-slate-800 " />
              {/* <div className="grid place-items-center">
                <Button variant={"outline"} size={"auto"} icon={FcGoogle} iconPosition={"left"} onClick={handleGoogleLogin}>
                  Google
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
