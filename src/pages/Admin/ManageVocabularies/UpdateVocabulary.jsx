import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import { ImSpinner } from "react-icons/im";
import { useNavigate, useParams } from "react-router";
import useSingleVocabulary from "../../../hooks/useSingleVocabulary";
import { IoMdArrowRoundBack } from "react-icons/io";
import { patch } from "../../../services/ApiEndpoint";
const UpdateVocabulary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [result, refetch] = useSingleVocabulary(id);
  const { word, meaning, pronunciation, whenToSay, lessonNo, adminEmail } = result;
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  //email password register
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const updatedVoacabullary = {
        word: data.word,
        meaning: data.meaning,
        pronunciation: data.pronunciation,
        whenToSay: data.say,
        lessonNo: data.lessonNo,
        adminEmail,
      };
      // Send data to server
      const request = await patch(`/vocabularies/${id}`, updatedVoacabullary);
      const response = request.data;
      if (response) {
        toast.success("Vocabulary Updated Successfully");
        refetch();
        navigate("/admin/manage-vocabularies");
      }
      reset();
    } catch (err) {
      toast.error(err?.response?.data?.message);
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
            <div className="text-center mb-3 mt-8 flex justify-between items-center mx-4">
              <h1 className="text-xl sm:text-3xl font-bold pt-2 text-slate-900 dark:text-slate-100 ">Update Vocabulary</h1>
              <button
                onClick={() => navigate(-1)}
                className="bg-gradient-to-r from-violet-700 to-violet-500 hover:bg-gradient-to-l hover:scale-105 active:scale-95 duration-700 text-white w-8 h-8 rounded-full flex items-center justify-center"
              >
                <IoMdArrowRoundBack />
              </button>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                  <div className="form-control">
                    <input
                      type="text"
                      required
                      placeholder="Word"
                      name="word"
                      defaultValue={word}
                      className="px-4 py-3 w-full rounded-lg  outline-none border-none bg-transparent font-medium text-slate-800 dark:text-slate-300 mt-4 bg-slate-200 dark:bg-slate-950"
                      {...register("word")}
                    />
                    {/* {errors.word && <span className="text-red-700 text-xs font-medium mt-0 ml-1">Word is required</span>} */}
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      required
                      placeholder="Meaning"
                      name="meaning"
                      defaultValue={meaning}
                      className="px-4 py-3 w-full rounded-lg  outline-none border-none bg-transparent font-medium text-slate-800 dark:text-slate-300 mt-4 bg-slate-200 dark:bg-slate-950"
                      {...register("meaning")}
                    />
                    {/* {errors.meaning && <span className="text-red-700 text-xs font-medium mt-0 ml-1">Meaning is required</span>} */}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                  <div className="form-control">
                    <input
                      type="text"
                      required
                      placeholder="Pronunciation"
                      name="pronunciation"
                      defaultValue={pronunciation}
                      className="px-4 py-3 w-full rounded-lg  outline-none border-none bg-transparent font-medium text-slate-800 dark:text-slate-300 mt-4 bg-slate-200 dark:bg-slate-950"
                      {...register("pronunciation")}
                    />
                    {/* {errors.pronunciation && <span className="text-red-700 text-xs font-medium mt-0 ml-1">Pronunciation is required</span>} */}
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      required
                      placeholder="Lesson Number"
                      name="lessonNo"
                      defaultValue={lessonNo}
                      className="px-4 py-3 w-full rounded-lg  outline-none border-none bg-transparent font-medium text-slate-800 dark:text-slate-300 mt-4 bg-slate-200 dark:bg-slate-950"
                      {...register("lessonNo")}
                    />
                    {/* {errors.lessonNo && <span className="text-red-700 text-xs font-medium mt-0 ml-1">Lesson Number is required</span>} */}
                  </div>
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    required
                    placeholder="When to Say"
                    name="say"
                    defaultValue={whenToSay}
                    className="px-4 py-3 w-full rounded-lg  outline-none border-none bg-transparent font-medium text-slate-800 dark:text-slate-300 mt-4 bg-slate-200 dark:bg-slate-950"
                    {...register("say")}
                  />
                  {/* {errors.say && <span className="text-red-700 text-xs font-medium mt-0 ml-1">When to Say field is required</span>} */}
                </div>

                <div className="mt-6 p-0 flex justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-violet-700 to-violet-500 hover:bg-gradient-to-l hover:scale-105 active:scale-95 duration-700 text-white px-6 py-2 rounded-md"
                  >
                    {loading ? <ImSpinner className="animate-spin" /> : "Update Vocabulary"}
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

export default UpdateVocabulary;
