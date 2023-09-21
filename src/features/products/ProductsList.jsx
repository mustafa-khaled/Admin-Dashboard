import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/features/productsSlice";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Product from "./Product";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";
import AddEditProduct from "./AddEditProduct";

function ProductsList() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Loader />;

  if (error) return <Empty content={error} />;

  return (
    <div className="p-[20px]">
      <AddEditProduct>
        <div className="mb-[20px] text-right text-colorBrand">
          <AddBoxIcon className="cursor-pointer" />
        </div>
      </AddEditProduct>

      {products.length > 0 ? (
        <div className="grid gap-[10px] grid-cols-[repeat(auto-fill,minmax(230px,1fr))]">
          {products.length > 0 &&
            products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
        </div>
      ) : (
        <Empty content={"No Products To SHow"} />
      )}
    </div>
  );
}

export default ProductsList;
