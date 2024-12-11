import { GiSpinningRibbons } from "react-icons/gi";

const Loader = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
        <span className="animate-spin flex justify-center text-[#FF792E] text-7xl">
          <GiSpinningRibbons />
        </span>
      </div>
    </div>
  );
};

export default Loader;