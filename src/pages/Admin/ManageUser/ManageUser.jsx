import { useSelector } from "react-redux";
import Loader from "../../../components/shared/Loader/Loader";
import useUsers from "../../../hooks/useUsers";
import ManageUserRow from "./ManageUserRow";
const ManageUser = () => {
  const user = useSelector((state) => state.Auth.user);
  const [result, refetch, isLoading] = useUsers();
  // console.log(result);
  const filteredData = result.filter((obj) => obj?.email !== user?.email);

  if (isLoading === true) {
    return <Loader />;
  }

  return (
    <div>
      {/* <Helmet>
        <title> Inventohub | Manage Shop </title>
      </Helmet> */}
      <div>
        {filteredData.length > 0 ? (
          <div className="py-5 px-8">
            <h2 className="text-xl md:text-3xl text-slate-950 dark:text-slate-100 font-semibold ml-1">Total {filteredData.length} Lessons</h2>
            {/* <DashContainer> */}
            <div>
              <div className="overflow-auto rounded-md block mt-5 shadow-light-container-shadow dark:shadow-dark-container-shadow">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-slate-800 border-b-2 border-gray-200 dark:border-slate-600 text-lg">
                    <tr className="text-light-text-100 dark:text-slate-200">
                      <th className=" py-4 px-3 text-sm font-semibold tracking-wide text-left">User Name</th>

                      <th className="w-60 py-4 text-sm font-semibold tracking-wide text-left">Email</th>

                      <th className="w-40 py-4 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Role</th>

                      <th className="w-56 py-4 text-sm font-semibold tracking-wide text-left">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                    {filteredData?.map((user) => (
                      <ManageUserRow key={user._id} user={user} refetch={refetch} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* </DashContainer> */}
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
            <div className="text-center">
              <h1 className="text-3xl text-[#1B2850] font-extrabold mt-4">No User Available</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageUser;
