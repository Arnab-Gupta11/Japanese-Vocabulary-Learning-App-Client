import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import { post } from "../../../services/ApiEndpoint";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { ImSpinner } from "react-icons/im";
import { IoMdArrowRoundBack } from "react-icons/io";
import useSingleUser from "../../../hooks/useSingleUser";
import { patch } from "../../../services/ApiEndpoint";
const UpdateLesson = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { lessonId } = useParams();
  const [result, refetch] = useSingleUser(lessonId);
  const { lessonName, lessonNumber, _id } = result;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //email password register
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const newLesson = {
        lessonName: data.lesson,
        lessonNumber: data.lessonNo,
      };
      console.log(newLesson);
      // Send data to server
      const request = await patch(`/lessons/${_id}`, newLesson);
      const response = request.data;
      if (response) {
        toast.success("Lesson Updated Successfully");
        refetch();
        navigate("/admin/manage-lesson");
      }

      reset();
    } catch (err) {
      if (err?.response?.data?.message === "Invalid ID") {
        toast.error("Lesson Number is Already Exist.");
      } else {
        toast.error(err?.response?.data?.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" z-0 pt-0 md:pt-10">
      {/* <Helmet>
        <title>Inventohub | Register</title>
      </Helmet> */}
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col pt-20 items-center">
          <div className="w-11/12 md:10/12 lg:w-4/12 bg-white dark:bg-slate-900 rounded-lg mx-auto shadow-light-container-shadow dark:shadow-dark-container-shadow pb-4">
            <div className="text-center mb-3 mt-8 flex justify-between items-center mx-4">
              <h1 className="text-xl sm:text-3xl lg:px-5 font-bold pt-2 text-slate-900 dark:text-slate-100 ">Update Lesson</h1>
              <button
                onClick={() => navigate(-1)}
                className="bg-gradient-to-r from-violet-700 to-violet-500 hover:bg-gradient-to-l hover:scale-105 active:scale-95 duration-700 text-white w-8 h-8 rounded-full flex items-center justify-center"
              >
                <IoMdArrowRoundBack />
              </button>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Lesson Name"
                    name="lesson"
                    defaultValue={lessonName}
                    className="px-4 py-3 w-full rounded-lg  outline-none border-none bg-transparent font-medium text-slate-800 dark:text-slate-300 mt-4 bg-slate-200 dark:bg-slate-950"
                    {...register("lesson", { required: true })}
                  />
                  {errors.email && <span className="text-red-700 text-xs font-medium mt-0 ml-1">Lesson Name is required</span>}
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Lesson Number"
                    name="lessonNo"
                    defaultValue={lessonNumber}
                    className="px-4 py-3 w-full rounded-lg  outline-none border-none bg-transparent font-medium text-slate-800 dark:text-slate-300 mt-4 bg-slate-200 dark:bg-slate-950"
                    {...register("lessonNo", { required: true })}
                  />
                  {errors.email && <span className="text-red-700 text-xs font-medium mt-0 ml-1">Lesson Number is required</span>}
                </div>

                <div className="mt-6 p-0 flex justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-violet-700 to-violet-500 hover:bg-gradient-to-l hover:scale-105 active:scale-95 duration-700 text-white px-6 py-2 rounded-md"
                  >
                    {loading ? <ImSpinner className="animate-spin" /> : "Update Lesson"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateLesson;
