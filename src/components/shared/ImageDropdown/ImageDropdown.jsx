import { useSelector } from "react-redux";

const ImageDropdown = () => {
  const user = useSelector((state) => state.Auth.user);
  return (
    <div className="dropdown dropdown-end  z-50 ">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 md:w-14 rounded-full border-2 border-slate-100 dark:border-slate-700">
          <img src={user?.image} />
        </div>
      </label>
      <ul tabIndex={0} className="shadow dropdown-content bg-[#F8F8F8] dark:bg-slate-900 rounded-box w-auto  py-3 px-4">
        <h1 className="text-base font-medium text-slate-800 dark:text-slate-300">{user?.name}</h1>
        <h1 className="text-base font-medium text-slate-800 dark:text-slate-300">{user?.email}</h1>
      </ul>
    </div>
  );
};

export default ImageDropdown;
