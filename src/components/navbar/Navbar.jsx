import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="h-[51px] flex items-center  border-b  border-gray-200 nav-bar">
      <div className="flex items-center gap-[20px] justify-between px-[20px] w-full ">
        <SearchBar />
        <NavIcons />
      </div>
    </div>
  );
}

export default Navbar;
