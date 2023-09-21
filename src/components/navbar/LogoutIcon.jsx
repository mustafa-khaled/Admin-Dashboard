import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function LogoutIcon() {
  return (
    <div>
      <Link to={"/login"}>
        <AccountCircleIcon className="text-colorBrand" />
      </Link>
    </div>
  );
}

export default LogoutIcon;
