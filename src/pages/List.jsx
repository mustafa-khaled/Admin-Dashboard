import DataTable from "../components/table/DataTable";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sideBar/SideBar";

function List() {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="flex-[6]">
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
}

export default List;
