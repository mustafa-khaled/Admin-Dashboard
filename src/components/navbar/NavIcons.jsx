import { Link } from "react-router-dom";
import { navBarData } from "../../data/data";
import DarkModeBtn from "./DarkModeBtn";

function NavIcons() {
  return (
    <div className="flex items-center gap-[15px] ">
      <DarkModeBtn />
      {navBarData.map((icon) => {
        const IconComponent = icon.icon;
        return (
          <div key={icon.id} className="relative">
            <Link to={icon.to}>
              <IconComponent className="text-colorBrand" />
            </Link>
            {icon.before && (
              <div className="absolute bg-red-600 top-[-5px] right-[-5px] text-gray-200 h-[15px] w-[15px] text-[10px] flex items-center justify-center rounded-full">
                {icon.before}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default NavIcons;
