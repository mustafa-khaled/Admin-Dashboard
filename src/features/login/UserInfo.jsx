import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/features/authSlice";
import LogoutIcon from "@mui/icons-material/Logout";

function UserInfo() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const userInfo = user && user[0]?.email;

  return (
    <div className="bg-colorGrey2 p-[20px] text-center rounded-md">
      <img
        src="/default-user.jpg"
        alt="user Avatar"
        className="mx-auto w-[70px] rounded-full"
      />
      <h1 className="text-2xl my-[20px]">{userInfo}</h1>
      <div
        className="text-textColor cursor-pointer flex items-center gap-[10px] justify-center bg-colorBrand p-[5px]"
        onClick={() => dispatch(logoutUser())}>
        <LogoutIcon />
        Log Out
      </div>
    </div>
  );
}

export default UserInfo;
