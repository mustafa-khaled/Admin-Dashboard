import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className=" h-[50px] flex items-center justify-center">
      <Link to={"/"}>
        <span className="text-colorBrand font-semibold text-[20px]  uppercase">
          Admin
        </span>
      </Link>
    </div>
  );
}

export default Logo;
