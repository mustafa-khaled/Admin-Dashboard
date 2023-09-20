import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/features/usersSlice";
import { toast } from "react-toastify";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const UsersActions = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(id))
      .then(() => {
        toast.success("User Successfully Deleted !");
      })
      .catch((error) => {
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
      {/* Delete User Confirm Message */}
      <Modal>
        <Modal.Open opens="userConfirm">
          <div className="cursor-pointer">
            <DeleteIcon className="text-gray-600" />
          </div>
        </Modal.Open>

        <Modal.Window name="userConfirm">
          <ConfirmDelete resource={`User`} onConfirm={handleDelete} />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default UsersActions;
