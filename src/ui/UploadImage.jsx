import { useEffect } from "react";
import { toast } from "react-toastify";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

function UploadImage({ file, setFile, setValues, setPer }) {
  const uploadFile = () => {
    const loadingToastId = toast.info("Uploading image...", {
      autoClose: false,
    });

    const uniqueName = new Date().getTime() + file.name;
    const storageRef = ref(storage, uniqueName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPer(progress);
      },
      (error) => {
        toast.error("Error uploading image");
        toast.dismiss(loadingToastId);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setValues((prev) => ({ ...prev, img: downloadURL }));
          toast.success("Image uploaded successfully");
          toast.dismiss(loadingToastId);
        });
      }
    );
  };

  useEffect(() => {
    file && uploadFile();
  }, [file, setValues]);

  return (
    <div className="w-[40%] mb-[20px]">
      <label
        htmlFor="file"
        className="flex items-center gap-[10px] mt-[20px] text-textColor">
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
  );
}

export default UploadImage;
