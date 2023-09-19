import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";
import ToggleMenu from "./ToggleMenu";

function Navbar({ setShowSidebar, showSidebar }) {
  return (
    <div className="h-[60px] fixed top-0 left-0 w-full flex items-center  border-b  border-borderColor nav-bar bg-colorGrey2">
      <div className="flex items-center gap-[20px] justify-between px-[20px] w-full ">
        <ToggleMenu setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        <SearchBar />
        <NavIcons />
      </div>
    </div>
  );
}

export default Navbar;
