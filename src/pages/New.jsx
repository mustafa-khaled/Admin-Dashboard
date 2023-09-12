import { useState } from "react";
import Input from "../components/Input";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sideBar/SideBar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

function New({ inputs, title }) {
  const [file, setFile] = useState("");

  return (
    <div className="flex w-full">
      <SideBar />
      <div className="flex-[6]">
        <Navbar />
        <div>
          <div className="p-[20px] m-[20px] shadow-md">
            <h1 className="text-gray-600 text-xl font-semibold">
              Add New {title}
            </h1>
          </div>
          <div className="p-[20px] m-[20px] shadow-md flex">
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
              <form className="flex flex-wrap gap-[20px] justify-around">
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
                    className="hidden w-full"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                {inputs.map((input) => {
                  return (
                    <div key={input.id} className="w-[40%]">
                      <Input input={input} />
                    </div>
                  );
                })}

                <button className="w-[150px]  text-gray-50 bg-gray-500 mt-[10px] p-[5px] hover:bg-gray-400">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
