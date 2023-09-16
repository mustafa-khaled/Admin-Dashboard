import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sideBar/SideBar";

function AppLayout() {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="flex-[6]">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
