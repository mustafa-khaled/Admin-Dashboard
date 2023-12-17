import { useOutsideClick } from "../../hooks/useOutsideClick";
import Logo from "./Logo";
import SideBarLinks from "./SideBarLinks";

function SideBar({ showSidebar, setShowSidebar }) {
  const sidebarRef = useOutsideClick(() => setShowSidebar(false));

  return (
    <>
      <div
        className={`fixed left-0 top-0 ${
          showSidebar && "w-full"
        } h-full  bg-gray-300/10 backdrop-blur-sm z-40`}></div>
      <div
        ref={sidebarRef}
        className={`fixed transition-right duration-300  ease-in-out ${
          showSidebar ? "left-0" : "left-[-300px]"
        } top-[60px] w-[250px] z-40 border-r border-borderColor min-h-[calc(100vh-60px)] bg-colorGrey2`}>
        <Logo />
        <SideBarLinks />
      </div>
    </>
  );
}

export default SideBar;
