import { useState } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { newProductFormInputs } from "../../data/data";
import { toast } from "react-toastify";
import Form from "../../ui/Form";
import UploadImage from "../../ui/UploadImage";

const initialValues = {
  title: "",
  price: "",
  status: "",
};

const uniqueProductId = new Date().getTime().toString();

function CreateEditProductForm({ productToEdit, onCloseModal }) {
  const [values, setValues] = useState(productToEdit || initialValues);
  const { title, price, status } = values;
  const [file, setFile] = useState("");
  const [per, setPer] = useState(null);

  const isEditSession = !!productToEdit;

  // Pass the current product's image URL (if available) to the UploadImage component
  const productImageURL = productToEdit ? productToEdit.img : null;

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!title || !price || !status) return;

    try {
      let productDocRef;

      if (isEditSession) {
        productDocRef = doc(db, "products", productToEdit.id);
        await setDoc(productDocRef, {
          ...values,
          timestamp: serverTimestamp(),
        });
        toast.success("Product Successfully Edited !");
      } else {
        const newProductRef = doc(db, "products", uniqueProductId);
        await setDoc(newProductRef, {
          ...values,
          timestamp: serverTimestamp(),
        });
        toast.success("New Product Successfully Created !");
      }

      setValues(initialValues);
      setFile("");
    } catch (err) {
      setValues({ ...values, error: err.message });
    } finally {
      onCloseModal?.();
    }
  };

  return (
    <div className="md:p-[20px] p-[5px] m-[20px] shadow-md bg-colorGrey2">
      <div className="flex-[1] h-[100px]">
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : productImageURL ||
                "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
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
            prevImageUrl={productImageURL}
          />
        </Form>
      </div>
    </div>
  );
}

export default CreateEditProductForm;
