import { formatCurrency } from "../../utils/helpers";

function Product({ product }) {
  const { image, title, price } = product;

  return (
    <div className=" bg-colorGrey2 p-[10px] text-center text-textColor">
      <img src={image} alt={title} className="w-[100px] mx-auto" />
      <h3 className="my-[10px]">{title}</h3>
      <p>{formatCurrency(price)}</p>
    </div>
  );
}

export default Product;
