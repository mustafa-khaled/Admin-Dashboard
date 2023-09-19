import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sideBar/SideBar";

function AppLayout() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <main className="min-h-[calc(100vh-60px)] mt-[60px]">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
