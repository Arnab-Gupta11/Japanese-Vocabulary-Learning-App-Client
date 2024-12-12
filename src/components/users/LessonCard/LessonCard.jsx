import { Link } from "react-router";

/* eslint-disable react/prop-types */
const LessonCard = ({ lesson }) => {
  const { lessonName, lessonNumber, vocabularyCount } = lesson;
  return (
    <Link to={`/lessons/${lessonNumber}`}>
      <div className="flex items-center gap-5 shadow-feature-card-shadow dark:shadow-feature-card-shadow-dark bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-lg">
        <div>
          <h1 className="text-4xl font-semibold text-slate-950 dark:text-slate-100">{lessonName}</h1>
          <h1 className="font-medium text-slate-800 dark:text-slate-300">
            <span className="text-lg font-medium text-slate-900 dark:text-slate-200">Lesson Number: </span>
            {lessonNumber}
          </h1>
          <p className="font-medium text-slate-800 dark:text-slate-300">
            <span className="text-lg font-medium text-slate-900 dark:text-slate-200">Vocabulary: </span>
            {vocabularyCount}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default LessonCard;
