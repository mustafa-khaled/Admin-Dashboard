import Modal from "../../ui/Modal";
import CreateEditProductForm from "./CreateEditProductForm";

function AddEditProduct({ children, userToEdit }) {
  return (
    <div>
      <Modal>
        <Modal.Open opens="userForm">{children}</Modal.Open>

        <Modal.Window name="userForm">
          <CreateEditProductForm userToEdit={userToEdit} />
        </Modal.Window>
      </Modal>
    </div>
  );
}
export default AddEditProduct;
