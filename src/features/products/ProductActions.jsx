import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/features/productsSlice";
import Modal from "../../ui/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddEditProduct from "./AddEditProduct";
import ConfirmDelete from "../../ui/ConfirmDelete";

function ProductActions({ product }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    toast.success("Product Successfully Deleted !");
  };

  return (
    <div className="product-operations absolute right-[5px] top-[5px] hidden flex-col gap-[5px] ">
      <div>
        <AddEditProduct productToEdit={product}>
          <EditIcon className="cursor-pointer" />
        </AddEditProduct>
      </div>

      {/* Delete Product Confirm Message */}
      <Modal>
        <Modal.Open opens="productConfirm">
          <div onClick={() => handleDelete(product?.id)}>
            <DeleteIcon className="cursor-pointer" />
          </div>
        </Modal.Open>

        <Modal.Window name="productConfirm">
          <ConfirmDelete
            resource={`Product`}
            onConfirm={() => handleDelete(product?.id)}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default ProductActions;
