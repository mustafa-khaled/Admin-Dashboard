import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateUserForm from "./CreateUserForm";
import { newUserFormInputs } from "../../data/data";

function AddNewUser() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="userForm">
          <Button>Add New User</Button>
        </Modal.Open>

        <Modal.Window name="userForm">
          <CreateUserForm inputs={newUserFormInputs} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddNewUser;
