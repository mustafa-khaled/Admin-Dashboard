import Modal from "../../ui/Modal";
import CreateEditUserForm from "./CreateEditUserForm";

function AddEditUser({ children, userToEdit }) {
  return (
    <div>
      <Modal>
        <Modal.Open opens="userForm">{children}</Modal.Open>

        <Modal.Window name="userForm">
          <CreateEditUserForm userToEdit={userToEdit} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddEditUser;
