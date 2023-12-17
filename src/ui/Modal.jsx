import { createPortal } from "react-dom";
import { cloneElement, createContext, useContext, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import ClearIcon from "@mui/icons-material/Clear";

const ModalContext = createContext();

function Modal({ children, onClose }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = (windowName) => setOpenName(windowName);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ opens: opensWindowName, children }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  // Custom Hook To Close Modal
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <>
      <div
        className={`fixed left-0 top-0 w-full h-full  bg-gray-300/10 backdrop-blur-sm`}></div>

      <div className="fixed top-0 left-0 w-full h-full z-20">
        <div
          className="z-50 fixed top-[50%] left-[50%] bg-colorGrey2 rounded-lg max-h-[80vh] shadow-md md:w-[600px]
          md:p-[20px] p-[5px] translate-y-[-50%] translate-x-[-50%] overflow-auto w-[90%]"
          ref={ref}>
          <button
            onClick={close}
            className="absolute top-[5px] left-[5px] text-textColor">
            <ClearIcon />
          </button>
          <div>{cloneElement(children, { onCloseModal: close })}</div>
        </div>
      </div>
    </>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
