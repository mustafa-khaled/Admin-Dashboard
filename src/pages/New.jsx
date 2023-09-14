import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sideBar/SideBar";
import Form from "../ui/Form";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const initialValues = {
  userName: "",
  surName: "",
  email: "",
  phone: "",
  password: "",
  address: "",
  country: "",
  error: "",
};

function New({ inputs, title }) {
  const [file, setFile] = useState("");

  const [values, setValues] = useState(initialValues);
  const { email, password, error } = values;

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        ...values,
        timeStamp: serverTimestamp(),
      });
      setValues(initialValues);
    } catch (err) {
      setValues({ ...values, error: err.message });
    }
  };

  return (
    <div className="flex w-full text-textColor">
      <SideBar />
      <div className="flex-[6]">
        <Navbar />
        <div>
          <div className="p-[20px] m-[20px] shadow-md bg-colorGrey2">
            <h1 className="text-xl font-semibold">Add New {title}</h1>
          </div>
          <div className="p-[20px] m-[20px] shadow-md flex bg-colorGrey2">
            <div className="flex-[1]   h-[100px] ">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
                className="w-[100px] rounded-full object-cover mx-auto"
              />
            </div>

            <div className="flex-[2] ">
              <Form
                inputs={inputs}
                values={values}
                setValues={setValues}
                handleSubmit={handleAdd}
                error={error}>
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
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
