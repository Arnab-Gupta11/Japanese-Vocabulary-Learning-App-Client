/* eslint-disable react/prop-types */
import { useState } from "react";
import { patch } from "../../../services/ApiEndpoint";
import toast from "react-hot-toast";
import { ImSpinner } from "react-icons/im";
// import Button2 from "../../../../components/shared/Button2/Button2";

const ManageUserRow = ({ user, refetch }) => {
  const { name, email, role, _id, image } = user;
  console.log(_id);
  const updatedRole = role === "admin" ? "Make User" : "Make Admin";
  const [loading, setLoading] = useState(false);
  const updateUserRole = async () => {
    try {
      setLoading(true);
      let updatedRole;
      if (role === "admin") {
        updatedRole = "user";
      } else {
        updatedRole = "admin";
      }
      const response = await patch(`/users/${_id}`, { role: updatedRole });
      if (response) {
        toast.success("User Role Updated Successfully");
        refetch();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <tr className="odd:bg-white odd:dark:bg-slate-900 even:bg-gray-50 even:dark:bg-slate-800 text-sm text-light-text-200 dark:text-slate-200 whitespace-nowrap font-medium hover:bg-[#cbe1ff] dark:hover:bg-[#172c48]">
      <td className="p-2">
        <div className="flex items-center gap-2">
          <div className="avatar">
            <div className="mask rounded-sm w-12 h-12">
              <img src={image} />
            </div>
          </div>
          <div>
            <div className="font-semibold">{name}</div>
          </div>
        </div>
      </td>
      <td className="py-2">{email}</td>
      <td className="py-2">{role}</td>
      <td className="py-2">
        <div className="flex items-center justify-start gap-4 ">
          <button
            onClick={updateUserRole}
            className="bg-gradient-to-r from-violet-700 to-violet-500 hover:bg-gradient-to-l hover:scale-105 active:scale-95 duration-700 text-white  py-2.5 rounded-md hover:duration-500 font-semibold w-32 flex justify-center items-center"
          >
            {loading ? <ImSpinner className="animate-spin" /> : updatedRole}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageUserRow;

{
  /*  */
}
