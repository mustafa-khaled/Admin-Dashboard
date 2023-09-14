import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Button from "../ui/Button";

const initialValues = {
  userName: "",
  surName: "",
  email: "",
  phone: "",
  password: "",
  address: "",
  country: "",
};

function AddNewForm({ setFile, inputs }) {
  const [values, setValues] = useState(initialValues);
  const { userName, surName, email, phone, password, address, country } =
    values;

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        ...values,
        timeStamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleAdd}
      className="flex flex-wrap gap-[20px] justify-around">
      <div className="w-[40%]">
        <label
          htmlFor="file"
          className="flex items-center gap-[10px] mt-[20px] ">
          Image:
          <DriveFolderUploadOutlinedIcon className="cursor-pointer" />
        </label>
        <input
          type="file"
          id="file"
          className="hidden w-full "
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      {inputs.map((input) => {
        return (
          <div key={input.id} className="w-[40%]">
            <label htmlFor={input.name}>{input.label}</label>
            <input
              id={input.name}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              value={values[input.name]}
              onChange={onChange}
              className="w-full border-b border-gray-300 outline-none p-[5px] bg-transparent"
            />
          </div>
        );
      })}
      <div className="w-[100%] text-start px-[30px]">
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
}

export default AddNewForm;
