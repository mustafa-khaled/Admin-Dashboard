import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/features/authSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { loginFormInputs } from "../../data/data";
import Form from "../../ui/Form";

const initialFormValues = {
  email: "user@fake.com",
  password: "123456789",
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
        dispatch(loginUser(user.providerData));
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
