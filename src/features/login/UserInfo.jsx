import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/features/authSlice";
import Button from "../../ui/Button";

function UserInfo() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const userInfo = user && user[0]?.email;

  return (
    <div className="bg-colorGrey2 p-[20px] text-center">
      <h1 className="text-2xl mb-[20px]">{userInfo}</h1>
      <Button onClick={() => dispatch(logoutUser())}>Log Out</Button>
    </div>
  );
}

export default UserInfo;
