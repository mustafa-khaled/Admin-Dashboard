import DarkModeBtn from "./DarkModeBtn";
import LogoutIcon from "./LogoutIcon";

function NavIcons() {
  return (
    <div className="flex items-center gap-[15px] ">
      <DarkModeBtn />
      <LogoutIcon />
    </div>
  );
}

export default NavIcons;
