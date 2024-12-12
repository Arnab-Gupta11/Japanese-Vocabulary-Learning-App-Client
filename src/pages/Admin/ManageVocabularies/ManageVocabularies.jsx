import { useState } from "react";
import Loader from "../../../components/shared/Loader/Loader";
import useVocabularies from "../../../hooks/UseVocabularies";
import ManageVocabulariesRow from "./ManageVocabulariesRow";

const ManageVocabularies = () => {
  const [lessonFilter, setLessonFilter] = useState(""); // State for filtering
  const [result, refetch, isLoading] = useVocabularies(lessonFilter); // Pass filter to hook

  const handleFilterChange = (event) => {
    setLessonFilter(event.target.value);
    refetch(); // Refetch data based on the new filter
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="py-5 px-8">
        <h2 className="text-xl md:text-3xl text-slate-950 dark:text-slate-100 font-semibold ml-1">Total {result.length} Vocabulary</h2>

        {/* Filtering Dropdown/Input */}
        <div className="my-4">
          <label htmlFor="lessonFilter" className="block text-sm font-medium text-slate-900 dark:text-slate-100">
            Filter by Lesson No
          </label>
          <input
            id="lessonFilter"
            type="text"
            placeholder="Enter Lesson Number"
            value={lessonFilter}
            onChange={handleFilterChange}
            className="mt-2 px-4 py-2 rounded-md w-full shadow-light-container-shadow dark:bg-slate-900 dark:shadow-dark-container-shadow text-slate-900 dark:text-slate-300 "
          />
        </div>

        {result.length > 0 ? (
          <div className="overflow-auto rounded-md block mt-5 shadow-light-container-shadow dark:shadow-dark-container-shadow">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-slate-800 border-b-2 border-gray-200 dark:border-slate-600 text-lg">
                <tr className="text-light-text-100 dark:text-slate-200">
                  <th className="w-36 py-4 px-3 text-sm font-semibold tracking-wide text-left">Word</th>
                  <th className="w-28 py-4 px-3 text-sm font-semibold tracking-wide text-left">Meaning</th>
                  <th className="w-36 py-4 px-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Pronunciation</th>
                  <th className="py-4 px-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">When to Say</th>
                  <th className="w-28 py-4 px-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Lesson No</th>
                  <th className="w-40 py-4 px-3 text-sm font-semibold tracking-wide text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                {result.map((vocabulary) => (
                  <ManageVocabulariesRow key={vocabulary._id} vocabulary={vocabulary} refetch={refetch} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
            <h1 className="text-3xl text-[#1B2850] font-extrabold mt-4">No Vocabulary Found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageVocabularies;
