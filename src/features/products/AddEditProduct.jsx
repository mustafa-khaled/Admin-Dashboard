import Modal from "../../ui/Modal";
import CreateEditProductForm from "./CreateEditProductForm";

function AddEditProduct({ children, productToEdit }) {
  return (
    <div>
      <Modal>
        <Modal.Open opens="userForm">{children}</Modal.Open>

        <Modal.Window name="userForm">
          <CreateEditProductForm productToEdit={productToEdit} />
        </Modal.Window>
      </Modal>
    </div>
  );
}
export default AddEditProduct;
