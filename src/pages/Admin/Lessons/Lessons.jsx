import { Link } from "react-router";
import Loader from "../../../components/shared/Loader/Loader";
import useLessons from "../../../hooks/useLessons";
import LessonRow from "./LessonRow";
const Lessons = () => {
  // eslint-disable-next-line no-unused-vars
  const [result, refetch, isLoading] = useLessons();
  console.log(result);

  if (isLoading === true) {
    return <Loader />;
  }

  return (
    <div>
      {/* <Helmet>
        <title> Inventohub | Manage Shop </title>
      </Helmet> */}
      <div>
        {result.length > 0 ? (
          <div className="py-5 px-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-3xl text-slate-950 dark:text-slate-100 font-semibold ml-1">Total {result.length} Lessons</h2>
              <Link
                to={"/admin/add-lesson"}
                className="bg-gradient-to-r from-violet-700 to-violet-500 hover:bg-gradient-to-l hover:scale-105 active:scale-95 duration-700 text-white px-6 py-2 rounded-md"
              >
                Add Lesson
              </Link>
            </div>
            <div>
              <div className="overflow-auto rounded-md block mt-5 shadow-light-container-shadow dark:shadow-dark-container-shadow">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-slate-800 border-b-2 border-gray-200 dark:border-slate-600 text-lg">
                    <tr className="text-light-text-100 dark:text-slate-200">
                      <th className="w-36 py-4 px-3 text-sm font-semibold tracking-wide text-left">Lesson No</th>

                      <th className=" py-4 px-3 text-sm font-semibold tracking-wide text-left">Lesson Name</th>

                      <th className="w-40 py-4 px-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Vocabulary Count</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                    {result?.map((lesson) => (
                      <LessonRow key={lesson._id} lesson={lesson} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
            <div className="text-center">
              <h1 className="text-3xl text-[#1B2850] font-extrabold mt-4">No Lesson Available</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lessons;
