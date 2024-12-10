import { Outlet } from "react-router";

const Home = () => {
  return (
    <div className="h-full w-full bg-red-700">
      Home
      <Outlet />
    </div>
  );
};

export default Home;
