import { formatCurrency } from "../../utils/helpers";
import ProductActions from "./ProductActions";

function Product({ product }) {
  const { id, image, title, price } = product;

  return (
    <div className="product bg-colorGrey2 p-[10px] text-center text-textColor relative">
      <img src={image} alt={title} className="w-[100px] mx-auto" />
      <h3 className="my-[10px]">{title}</h3>
      <p>{formatCurrency(price)}</p>
      <ProductActions productId={id} />
    </div>
  );
}

export default Product;
