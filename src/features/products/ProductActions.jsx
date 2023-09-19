import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/features/productsSlice";
import AddEditProduct from "./AddEditProduct";
import { toast } from "react-toastify";

function ProductActions({ product }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    toast.success("Product Successfully Deleted !");
  };

  return (
    <div className="product-operations absolute right-[5px] top-[5px] hidden flex-col gap-[5px] ">
      <div onClick={() => handleDelete(product.id)}>
        <DeleteIcon className="cursor-pointer" />
      </div>
      <div>
        <AddEditProduct productToEdit={product}>
          <EditIcon className="cursor-pointer" />
        </AddEditProduct>
      </div>
    </div>
  );
}

export default ProductActions;
