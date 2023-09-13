import Logo from "./Logo";
import SideBarLinks from "./SideBarLinks";

function SideBar() {
  return (
    <div className=" flex-[1] border-r border-borderColor min-h-[100vh] bg-colorGrey2">
      <Logo />
      <SideBarLinks />
    </div>
  );
}

export default SideBar;
