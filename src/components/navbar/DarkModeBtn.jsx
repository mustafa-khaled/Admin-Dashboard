import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../redux/features/darkModeSlice";
import { useEffect } from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";

function DarkModeBtn() {
  const { mode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [mode]);

  return (
    <div onClick={() => dispatch(toggleDarkMode())}>
      {mode ? (
        <Brightness7Icon className="text-colorBrand" />
      ) : (
        <NightlightRoundIcon className="text-colorBrand" />
      )}
    </div>
  );
}

export default DarkModeBtn;
