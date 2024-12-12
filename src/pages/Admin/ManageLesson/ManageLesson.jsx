// import Loader from "../../../components/shared/Loader/Loader";
// import useLessons from "../../../hooks/useLessons";

import Loader from "../../../components/shared/Loader/Loader";
import useLessons from "../../../hooks/useLessons";
import ManageLessonRow from "./ManageLessonRow";

// import LessonRow from "./LessonRow";
const Lessons = () => {
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
            <h2 className="text-xl md:text-3xl text-slate-950 dark:text-slate-100 font-semibold ml-1">Total {result.length} Lessons</h2>
            <div>
              <div className="overflow-auto rounded-md block mt-5 shadow-light-container-shadow dark:shadow-dark-container-shadow">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-slate-800 border-b-2 border-gray-200 dark:border-slate-600 text-lg">
                    <tr className="text-light-text-100 dark:text-slate-200">
                      <th className="w-36 py-4 px-3 text-sm font-semibold tracking-wide text-left">Lesson No</th>

                      <th className=" py-4 px-3 text-sm font-semibold tracking-wide text-left">Lesson Name</th>

                      <th className="w-28 py-4 px-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Vocabulary Count</th>

                      <th className="w-40 py-4 px-3 text-sm font-semibold tracking-wide text-center">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                    {result?.map((lesson) => (
                      <ManageLessonRow key={lesson._id} lesson={lesson} refetch={refetch} />
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
