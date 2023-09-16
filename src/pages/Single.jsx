import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sideBar/SideBar";
import TableComponent from "../components/homeTable/Table";
import User from "../components/users/User";
import Product from "../components/products/Product";

function Single({ role }) {
  return (
    <div className="flex w-full text-textColor">
      <SideBar />
      <div className="flex-[6]">
        <Navbar />

        {role === "user" ? <User /> : <Product />}

        <div className="p-[20px] shadow-md my-[10px] mx-[20px]">
          <h1 className="mb-[20px] text-lg ">Last Transactions</h1>
          <TableComponent />
        </div>
      </div>
    </div>
  );
}

export default Single;
