/* eslint-disable react/prop-types */
import { RiDeleteBin6Line } from "react-icons/ri";
import { patch } from "../../../services/ApiEndpoint";
import toast from "react-hot-toast";
// import Button2 from "../../../../components/shared/Button2/Button2";

const ManageUserRow = ({ user, refetch }) => {
  const { name, email, role, _id, image } = user;
  console.log(_id);
  const updateUserRole = async () => {
    try {
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
            className="bg-blue-400  py-2.5 rounded-md hover:bg-[#1B2850]  hover:duration-500 font-semibold text-white w-32"
          >
            {role === "admin" ? "Make User" : "Make Admin"}
          </button>
          <span className="text-2xl text-red-700 font-medium hover:text-red-600 cursor-pointer">
            <RiDeleteBin6Line className="hover:scale-105 duration-500" />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default ManageUserRow;

{
  /*  */
}
