import Confetti from "react-confetti";
import Loader from "../../components/shared/Loader/Loader";
import usePaginatedVocabularies from "../../hooks/usePaginatedVocabularies";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
const ViewLesson = () => {
  const { lessonNo } = useParams();
  const [page, setPage] = useState(1); // To handle pagination state
  const [showConfetti, setShowConfetti] = useState(false); // For confetti animation
  const navigate = useNavigate();

  // Using the custom hook to fetch paginated vocabularies
  const { vocabularies, totalPages, isLoading } = usePaginatedVocabularies(lessonNo, page);

  if (isLoading) {
    return <Loader />;
  }

  const vocabulary = vocabularies[0]; // Access the single vocabulary on the current page

  const handleNext = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleComplete = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      navigate("/lessons");
    }, 4000);
  };

  const playPronunciation = (word) => {
    console.log("Hello");
    if ("speechSynthesis" in window) {
      console.log("boss");
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "ja-JP"; // Adjust language code if needed
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Your browser does not support speech synthesis.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      {showConfetti && <Confetti width={1000} />}
      {vocabulary ? (
        <div className="max-w-screen-sm p-6 bg-white dark:bg-gray-800 shadow-feature-card-shadow dark:shadow-feature-card-shadow-dark rounded-md">
          {/* Vocabulary Word */}
          <h1
            onClick={() => playPronunciation(vocabulary.word)}
            className="text-2xl font-bold text-slate-900 dark:text-white mb-4 cursor-pointer hover:underline"
            title="Click to hear pronunciation"
          >
            {vocabulary.word}
          </h1>

          {/* Vocabulary Details */}
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            <strong>Meaning:</strong> {vocabulary.meaning}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            <strong>Pronunciation:</strong> {vocabulary.pronunciation}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            <strong>When to Say:</strong> {vocabulary.whenToSay}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            <strong>Lesson No:</strong> {vocabulary.lessonNo}
          </p>

          {/* Pagination Controls */}
          <div className="flex justify-between mt-6">
            <button
              disabled={page === 1}
              onClick={handlePrevious}
              className="bg-gradient-to-r from-violet-700 to-violet-500 hover:bg-gradient-to-l hover:scale-105 active:scale-95 duration-700 text-white px-6 py-2 rounded-md disabled:opacity-50"
            >
              Previous
            </button>
            <button
              disabled={page === totalPages}
              onClick={handleNext}
              className="bg-gradient-to-r from-violet-700 to-violet-500 hover:bg-gradient-to-l hover:scale-105 active:scale-95 duration-700 text-white px-6 py-2 rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>

          {/* Completion Button */}
          {page === totalPages && (
            <div className="grid place-items-center">
              <button onClick={handleComplete} className="mt-6 px-4 py-2 bg-green-500 text-white rounded-md text-center">
                Complete
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl text-gray-700 dark:text-gray-200">No Vocabulary Found</h2>
        </div>
      )}
    </div>
  );
};

export default ViewLesson;
