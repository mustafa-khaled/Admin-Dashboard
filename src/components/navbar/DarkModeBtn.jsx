import { useDarkMode } from "../../context/DarkModeContext";

import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function DarkModeBtn() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div onClick={toggleDarkMode}>
      {isDarkMode ? (
        <Brightness7Icon className="text-colorBrand" />
      ) : (
        <NightlightRoundIcon className="text-colorBrand" />
      )}
    </div>
  );
}

export default DarkModeBtn;
