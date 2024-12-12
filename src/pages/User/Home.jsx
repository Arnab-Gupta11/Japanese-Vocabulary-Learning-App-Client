import { Loader } from "lucide-react";
import useLessons from "../../hooks/useLessons";
import LessonCard from "../../components/users/LessonCard/LessonCard";

const Home = () => {
  const [result, isLoading] = useLessons();
  console.log(result);
  if (isLoading === true) {
    return <Loader />;
  }
  return (
    <div className="max-w-screen-xl mx-auto my-16 px-5 xl:px-0">
      {result.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {result?.map((lesson) => (
            <LessonCard key={lesson._id} lesson={lesson} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
            <h1 className="text-3xl text-slate-900 dark:text-slate-100 font-extrabold mt-4">No Lessons Available</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
