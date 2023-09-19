import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/features/usersSlice";
import { toast } from "react-toastify";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";

const UsersActions = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(id))
      .then(() => {
        toast.success("User Successfully Deleted !");
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        toast.error(error);
      });
  };

  return (
    <div className="flex items-center gap-[15px]">
      <Link to={`/users/${id}`}>
        <div className="cursor-pointer text-gray-600">
          <RemoveRedEyeIcon />
        </div>
      </Link>
      <div className="cursor-pointer" onClick={handleDelete}>
        <DeleteIcon className="text-gray-600" />
      </div>
    </div>
  );
};

export default UsersActions;
