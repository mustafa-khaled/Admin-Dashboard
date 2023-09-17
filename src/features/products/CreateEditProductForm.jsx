import { useState } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { newProductFormInputs } from "../../data/data";

import Form from "../../ui/Form";
import UploadImage from "../../components/UploadImage";

const initialValues = {
  title: "",
  price: "",
  status: "",
};

function CreateEditProductForm({ productToEdit, onCloseModal }) {
  const [values, setValues] = useState(productToEdit || initialValues);
  const { title, price, status } = values;
  const [file, setFile] = useState("");
  const [per, setPer] = useState(null);

  const isEditSession = !!productToEdit;
  const handleAdd = async (e) => {
    e.preventDefault();

    if (!title || !price || !status) return;

    try {
      let productDocRef;

      if (isEditSession) {
        // Update the existing product
        productDocRef = doc(db, "products", productToEdit.id || 578);

        await setDoc(productDocRef, {
          ...values,
          timestamp: serverTimestamp(),
        });
      } else {
        // Create a new product
        productDocRef = doc(db, "products");

        await setDoc(productDocRef, {
          ...values,
          timestamp: serverTimestamp(),
        });
      }

      // Reset the form and file after successful operation
      setValues(initialValues);
      setFile("");
    } catch (err) {
      setValues({ ...values, error: err.message });
    } finally {
      onCloseModal?.();
    }
  };

  return (
    <div className="p-[20px] m-[20px] shadow-md bg-colorGrey2">
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
          inputs={newProductFormInputs}
          values={values}
          setValues={setValues}
          handleSubmit={handleAdd}
          disable={per === null || per < 100}>
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

export default CreateEditProductForm;
