import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/features/productsSlice";

function ProductActions({ productId }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="product-operations absolute right-[5px] top-[5px] hidden flex-col gap-[5px] ">
      <div onClick={() => handleDelete(productId)}>
        <DeleteIcon className="cursor-pointer" />
      </div>
      <EditIcon className="cursor-pointer" />
    </div>
  );
}

export default ProductActions;
