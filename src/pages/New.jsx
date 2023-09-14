import { useState } from "react";

import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sideBar/SideBar";
import AddNewForm from "../components/AddNewForm";

function New({ inputs, title }) {
  const [file, setFile] = useState("");

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
              <AddNewForm setFile={setFile} inputs={inputs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
