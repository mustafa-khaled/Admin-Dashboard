import { useState } from "react";
import { loginFormInputs } from "../../data/data";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/features/authSlice";
import Form from "../../ui/Form";

// mustafa@user.com
const initialFormValues = {
  email: "",
  password: "",
  error: false,
};

function LoginForm() {
  const [values, setValues] = useState(initialFormValues);
  const { email, password, error } = values;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(loginUser(user));
        navigate("/");
      })
      .catch((error) => {
        setValues({ ...values, error: error.message });
      });
  };

  return (
    <Form
      styles="w-[400px]"
      inputs={loginFormInputs}
      values={values}
      setValues={setValues}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
}

export default LoginForm;
