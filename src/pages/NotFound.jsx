import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex items-center justify-center h-[100vh] bg-colorGrey text-center text-textColor">
      <div className="bg-colorGrey2 p-[20px]">
        <h1 className="mb-[20px] text-3xl">Not Found Page</h1>
        <Link
          to={"/"}
          replace
          className="py-[5px] px-[10px] bg-colorBrand hover:bg-hoverBrand rounded-sm">
          Go To Home!
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
