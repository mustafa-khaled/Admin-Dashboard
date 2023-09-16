import Navbar from "../components/navbar/Navbar";
import ProductsList from "../components/products/ProductsList";
import SideBar from "../components/sideBar/SideBar";
import UsersList from "../components/users/UsersList";

function List({ role }) {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="flex-[6]">
        <Navbar />
        {role === "users" ? <UsersList /> : <ProductsList />}
      </div>
    </div>
  );
}

export default List;
