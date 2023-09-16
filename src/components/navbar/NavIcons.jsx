import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import DarkModeBtn from "./DarkModeBtn";

function NavIcons() {
  return (
    <div className="flex items-center gap-[15px] ">
      <DarkModeBtn />

      <div>
        <Link to={"/login"}>
          <AccountCircleIcon className="text-colorBrand" />
        </Link>
      </div>
    </div>
  );
}

export default NavIcons;
