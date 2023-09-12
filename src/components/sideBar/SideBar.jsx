import Logo from "./Logo";
import SideBarLinks from "./SideBarLinks";

function SideBar() {
  return (
    <div className=" flex-[1] border-r border-gray-200 min-h-[100vh]">
      <Logo />
      <SideBarLinks />
    </div>
  );
}

export default SideBar;
