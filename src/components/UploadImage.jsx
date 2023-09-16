import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { useEffect } from "react";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

function UploadImage({ file, setFile, setValues, setPer }) {
  useEffect(() => {
    const uploadFile = () => {
      // Give The Image a Unique Name
      const uniqueName = new Date().getTime() + file.name;
      const storageRef = ref(storage, uniqueName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPer(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setValues((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };

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
