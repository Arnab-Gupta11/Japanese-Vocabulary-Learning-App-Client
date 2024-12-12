import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import { ImSpinner } from "react-icons/im";
import { useSelector } from "react-redux";
import { post } from "../../../services/ApiEndpoint";
const AddVocabularies = () => {
  const user = useSelector((state) => state.Auth.user);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //email password register
  const onSubmit = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      const newVoacabullary = {
        word: data.word,
        meaning: data.meaning,
        pronunciation: data.pronunciation,
        whenToSay: data.say,
        lessonNo: data.lessonNo,
        adminEmail: user.email,
      };
      console.log(newVoacabullary);
      // Send data to server
      const request = await post("/vocabularies", newVoacabullary);
      const response = request.data;
      if (response) {
        toast.success("New Vocabulary Added Successfully");
      }
      reset();
    } catch (err) {
      if (err?.response?.data?.message === "Invalid ID") {
        toast.error("Lesson Name is Already Exist.");
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
        <div className="flex flex-col pt-16 items-center">
          <div className="w-11/12 md:10/12 lg:w-6/12 bg-white dark:bg-slate-900 rounded-lg mx-auto shadow-light-container-shadow dark:shadow-dark-container-shadow pb-4">
            <div className="text-center mb-3 mt-8">
              <h1 className="text-xl xsm:text-2xl sm:text-4xl lg:px-5 font-bold pt-5 text-slate-900 dark:text-slate-100 ">Add New Vocabulary</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Word"
                      name="word"
                      className="px-4 py-3 w-full rounded-lg  outline-none border-none bg-transparent font-medium text-slate-800 dark:text-slate-300 mt-4 bg-slate-200 dark:bg-slate-950"
                      {...register("word", { required: true })}
                    />
                    {errors.word && <span className="text-red-700 text-xs font-medium mt-0 ml-1">Word is required</span>}
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Meaning"
                      name="meaning"
                      className="px-4 py-3 w-full rounded-lg  outline-none border-none bg-transparent font-medium text-slate-800 dark:text-slate-300 mt-4 bg-slate-200 dark:bg-slate-950"
                      {...register("meaning", { required: true })}
                    />
                    {errors.meaning && <span className="text-red-700 text-xs font-medium mt-0 ml-1">Meaning is required</span>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Pronunciation"
                      name="pronunciation"
                      className="px-4 py-3 w-full rounded-lg  outline-none border-none bg-transparent font-medium text-slate-800 dark:text-slate-300 mt-4 bg-slate-200 dark:bg-slate-950"
                      {...register("pronunciation", { required: true })}
                    />
                    {errors.pronunciation && <span className="text-red-700 text-xs font-medium mt-0 ml-1">Pronunciation is required</span>}
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Lesson Number"
                      name="lessonNo"
                      className="px-4 py-3 w-full rounded-lg  outline-none border-none bg-transparent font-medium text-slate-800 dark:text-slate-300 mt-4 bg-slate-200 dark:bg-slate-950"
                      {...register("lessonNo", { required: true })}
                    />
                    {errors.lessonNo && <span className="text-red-700 text-xs font-medium mt-0 ml-1">Lesson Number is required</span>}
                  </div>
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="When to Say"
                    name="say"
                    className="px-4 py-3 w-full rounded-lg  outline-none border-none bg-transparent font-medium text-slate-800 dark:text-slate-300 mt-4 bg-slate-200 dark:bg-slate-950"
                    {...register("say", { required: true })}
                  />
                  {errors.say && <span className="text-red-700 text-xs font-medium mt-0 ml-1">When to Say field is required</span>}
                </div>

                <div className="mt-6 p-0 flex justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-violet-700 to-violet-500 hover:bg-gradient-to-l hover:scale-105 active:scale-95 duration-700 text-white px-6 py-2 rounded-md"
                  >
                    {loading ? <ImSpinner className="animate-spin" /> : "Add Vocabulary"}
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

export default AddVocabularies;
