import Modal from "../../ui/Modal";
import CreateUserForm from "./CreateUserForm";

function AddEditUser({ children, userToEdit }) {
  return (
    <div>
      <Modal>
        <Modal.Open opens="userForm">{children}</Modal.Open>

        <Modal.Window name="userForm">
          <CreateUserForm userToEdit={userToEdit} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddEditUser;
