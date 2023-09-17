import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/features/authSlice";
import LogoutIcon from "@mui/icons-material/Logout";

function UserInfo() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const userInfo = user && user[0]?.email;

  return (
    <div className="bg-colorGrey2 p-[20px] text-center">
      <h1 className="text-2xl mb-[20px]">{userInfo}</h1>
      <div
        className="text-textColor cursor-pointer bg-colorBrand p-[5px]"
        onClick={() => dispatch(logoutUser())}>
        <LogoutIcon />
        Log Out
      </div>
    </div>
  );
}

export default UserInfo;
