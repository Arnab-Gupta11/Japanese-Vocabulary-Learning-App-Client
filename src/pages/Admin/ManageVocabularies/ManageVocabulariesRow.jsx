/* eslint-disable react/prop-types */
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { deleteData } from "../../../services/ApiEndpoint";

const ManageVocabulariesRow = ({ vocabulary, refetch }) => {
  const { word, meaning, _id, pronunciation, whenToSay, lessonNo } = vocabulary;
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(`/vocabularies/${_id}`).then((res) => {
          console.log(res.data);
          if (res?.data?.success === true) {
            Swal.fire("Vocabulary has been Deleted!", "success");
            refetch();
          }
        });
      }
    });
  };
  return (
    <tr className="odd:bg-white odd:dark:bg-slate-900 even:bg-gray-50 even:dark:bg-slate-800 text-sm text-light-text-200 dark:text-slate-200 whitespace-nowrap font-medium hover:bg-[#cbe1ff] dark:hover:bg-[#172c48]">
      <td className="py-2 pl-3">{word}</td>
      <td className="py-2 pl-3">{meaning}</td>
      <td className="py-2 pl-5">{pronunciation}</td>
      <td className="py-2 pl-3">{whenToSay}</td>
      <td className="py-2 pl-5">{lessonNo}</td>
      <td className="py-2 pl-3">
        <div className="flex items-center justify-center gap-4 ">
          <Link to={`/admin/manage-vocabularies/${_id}`}>
            <span className="text-2xl text-[#637381] dark:text-slate-400 font-medium hover:text-black dark:hover:text-slate-200 cursor-pointer ">
              <BiEditAlt className="hover:scale-105 duration-500" />
            </span>
          </Link>
          <span onClick={handleDelete} className="text-2xl text-red-700 font-medium hover:text-red-600 cursor-pointer">
            <RiDeleteBin6Line className="hover:scale-105 duration-500" />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default ManageVocabulariesRow;
