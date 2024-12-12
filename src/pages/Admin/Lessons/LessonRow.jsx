/* eslint-disable react/prop-types */
const LessonRow = ({ lesson }) => {
  const { lessonName, lessonNumber, vocabularyCount } = lesson;
  return (
    <tr className="odd:bg-white odd:dark:bg-slate-900 even:bg-gray-50 even:dark:bg-slate-800 text-sm text-light-text-200 dark:text-slate-200 whitespace-nowrap font-medium hover:bg-[#cbe1ff] dark:hover:bg-[#172c48]">
      <td className="py-2 pl-3">{lessonNumber}</td>
      <td className="py-2 pl-3">{lessonName}</td>
      <td className="py-2 pl-3">{vocabularyCount}</td>
    </tr>
  );
};

export default LessonRow;
