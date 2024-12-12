import { videoLink } from "../../constants";

const Tutorials = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-14 px-5 xl:px-0">
      <h2 className="text-xl xsm:text-2xl sm:text-3xl bs:text-5xl font-bold border-l-8 border-[#9946F0] text-slate-900 dark:text-slate-100 pl-2 md:pl-4 mb-5 md:mb-10 ">
        Video Tutorial
      </h2>

      <div className="grid grid-col-1 md:grid-cols-2 gap-5">
        {videoLink?.map((video, index) => {
          return (
            <div key={index} className="shadow-feature-card-shadow dark:shadow-feature-card-shadow-dark p-5 rounded-md">
              <iframe
                className="aspect-video w-full rounded-md"
                src={video.vedioLink}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <h1 className="text-base sm:text-lg md:text-xl font-medium text-slate-800 dark:text-slate-200 mt-3">{video.videoTitle}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tutorials;
