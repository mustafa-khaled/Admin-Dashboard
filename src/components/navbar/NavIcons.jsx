import { Link } from "react-router-dom";
import { navBarData } from "../../data/data";
import DarkModeBtn from "./DarkModeBtn";
import avatar from "/public/default-user.jpg";

function NavIcons() {
  return (
    <div className="flex items-center gap-[15px] ">
      <DarkModeBtn />
      {navBarData.map((icon) => {
        const IconComponent = icon.icon;
        return (
          <div key={icon.id} className="relative">
            <IconComponent className="text-colorBrand" />

            {icon.before && (
              <div className="absolute bg-red-600 top-[-5px] right-[-5px] text-gray-200 h-[15px] w-[15px] text-[10px] flex items-center justify-center rounded-full">
                {icon.before}
              </div>
            )}
          </div>
        );
      })}

      <Link to="login">
        <img src={avatar} alt="Avatar" className="w-[20px]" />
      </Link>
    </div>
  );
}

export default NavIcons;
