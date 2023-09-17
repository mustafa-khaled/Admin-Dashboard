import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/features/productsSlice";
import Product from "./Product";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";

function ProductsList() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <Empty content={error} />;

  return (
    <div className="p-[20px] grid gap-[10px] grid-cols-[repeat(auto-fill,minmax(230px,1fr))]">
      {products.length > 0 &&
        products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
    </div>
  );
}

export default ProductsList;
