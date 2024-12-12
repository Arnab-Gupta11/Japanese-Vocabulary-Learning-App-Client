import Confetti from "react-confetti";
import Loader from "../../components/shared/Loader/Loader";
import usePaginatedVocabularies from "../../hooks/usePaginatedVocabularies";
import { useNavigate, useParams } from "react-router";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
const ViewLesson = () => {
  const { lessonNo } = useParams();
  const [page, setPage] = useState(1); // To handle pagination state
  const [showConfetti, setShowConfetti] = useState(false); // For confetti animation
  const navigate = useNavigate();

  // Using the custom hook to fetch paginated vocabularies
  const { vocabularies, totalPages, isLoading } = usePaginatedVocabularies(lessonNo, page);

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
      navigate("/");
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

  const containerRef = useRef(null); // Reference to the container for confetti dimensions
  const [confettiDimensions, setConfettiDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update confetti dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { offsetWidth } = containerRef.current;
        setConfettiDimensions({
          width: offsetWidth - 4000,
        });
      }
    };

    handleResize(); // Set dimensions on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div ref={containerRef} className="max-w-screen-xl mx-auto px-5 xl:px-0 overflow-x-hidden">
      {showConfetti && <Confetti width={confettiDimensions.width} />}
      <div className="flex justify-between items-center mb-5 md:mb-10 mt-10">
        <h2 className="text-xl xsm:text-2xl sm:text-3xl bs:text-5xl font-bold border-l-8 border-[#9946F0] text-slate-900 dark:text-slate-100 pl-2 md:pl-4  ">
          Vocabularies
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-gradient-to-r from-violet-700 to-violet-500 hover:bg-gradient-to-l hover:scale-105 active:scale-95 duration-700 text-white w-8 h-8 rounded-full flex items-center justify-center"
        >
          <IoMdArrowRoundBack />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center p-8">
        {vocabulary ? (
          <div className="max-w-screen-sm p-6 bg-white dark:bg-slate-900 shadow-feature-card-shadow dark:shadow-feature-card-shadow-dark rounded-md">
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
    </div>
  );
};

export default ViewLesson;
