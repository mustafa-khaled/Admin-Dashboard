import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

import Form from "../../ui/Form";
import UploadImage from "../../components/UploadImage";

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

function CreateUserForm({ inputs }) {
  const [values, setValues] = useState(initialValues);
  const { email, password, error } = values;
  const [file, setFile] = useState("");
  const [per, setPer] = useState(null);

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!email || !password) return;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        ...values,
        timeStamp: serverTimestamp(),
      });
      setValues(initialValues);
      setFile("");
    } catch (err) {
      setValues({ ...values, error: err.message });
    }
  };

  return (
    <div className="p-[20px] m-[20px] shadow-md  bg-colorGrey2">
      <div className="flex-[1] h-[100px] ">
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

      <div>
        <Form
          inputs={inputs}
          values={values}
          setValues={setValues}
          handleSubmit={handleAdd}
          error={error}
          // To Disable The btn while uploading
          disable={per === null || per < 100}>
          {/* Pass Image Uploader as child */}
          <UploadImage
            file={file}
            setFile={setFile}
            setValues={setValues}
            setPer={setPer}
          />
        </Form>
      </div>
    </div>
  );
}

export default CreateUserForm;
