import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { newUserFormInputs } from "../../data/data";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Form from "../../ui/Form";
import UploadImage from "../../ui/UploadImage";

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

function CreateEditUserForm({ userToEdit, onCloseModal }) {
  const [values, setValues] = useState(userToEdit || initialValues);
  const { email, password, error } = values;
  const [file, setFile] = useState("");
  const [per, setPer] = useState(null);

  const navigate = useNavigate();

  const isEditSession = userToEdit;

  // Pass the current user's image URL (if available) to the UploadImage component
  const userImageURL = userToEdit ? userToEdit.img : null;

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!email || !password) return;

    try {
      let userDocRef;

      if (isEditSession) {
        // Update the existing user
        userDocRef = doc(db, "users", userToEdit.id);
        await setDoc(userDocRef, {
          ...values,
          timeStamp: serverTimestamp(),
        });

        toast.success("User Successfully Edited !");
        navigate(-1);
      } else {
        // Create a new user
        const res = await createUserWithEmailAndPassword(auth, email, password);
        userDocRef = doc(db, "users", res.user.uid);
        await setDoc(userDocRef, { ...values, timeStamp: serverTimestamp() });
        toast.success("New User Successfully Created !");
      }

      // Reset the form and file after successful operation
      setValues(initialValues);
      setFile("");
    } catch (err) {
      setValues({ ...values, error: err.message });
      toast.success(err.message);
    } finally {
      onCloseModal?.();
    }
  };

  return (
    <div className="p-[20px] m-[20px] shadow-md  bg-colorGrey2">
      <div className="flex-[1] h-[100px] ">
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : userImageURL ||
                "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          }
          alt=""
          className="w-[100px] rounded-full object-cover mx-auto"
        />
      </div>

      <div>
        <Form
          inputs={newUserFormInputs}
          values={values}
          setValues={setValues}
          handleSubmit={handleAdd}
          error={error}
          disable={per === null || per < 100}>
          <UploadImage
            file={file}
            setFile={setFile}
            setValues={setValues}
            setPer={setPer}
            prevImageUrl={userImageURL}
          />
        </Form>
      </div>
    </div>
  );
}

export default CreateEditUserForm;
