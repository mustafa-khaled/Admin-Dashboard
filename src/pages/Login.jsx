import { useSelector } from "react-redux";
import LoginForm from "../features/login/LoginForm";
import UserInfo from "../features/login/UserInfo";

function Login() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="min-h-[100vh]  flex items-center justify-center text-textColor">
      {user ? <UserInfo /> : <LoginForm />}
    </div>
  );
}

export default Login;
