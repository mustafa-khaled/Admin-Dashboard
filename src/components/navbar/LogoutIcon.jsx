import { useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import UserInfo from "../../features/login/UserInfo";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function LogoutIcon() {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const userInfoRef = useOutsideClick(() => setShowUserInfo(false));

  return (
    <div>
      <div onClick={() => setShowUserInfo((u) => !u)}>
        <AccountCircleIcon className="text-colorBrand" />
      </div>
      {/* User Info Box */}
      <div
        ref={userInfoRef}
        className={`bg-colorGrey2 text-textColor shadow-md rounded-[10px] p-[10px] fixed transition-right duration-300  ease-in-out ${
          showUserInfo ? "right-[10px]" : "right-[-100%]"
        } top-[60px]`}>
        <UserInfo />
      </div>
    </div>
  );
}

export default LogoutIcon;
