import { navBarData } from "../../data/data";
import avatar from "/public/default-user.jpg";

function NavIcons() {
  return (
    <div className="flex items-center gap-[10px] ">
      {navBarData.map((icon) => {
        const IconComponent = icon.icon;
        return (
          <div key={icon.id} className="relative">
            <IconComponent />

            {icon.before && (
              <div className="absolute bg-red-600 top-[-5px] right-[-5px] text-gray-100 h-[15px] w-[15px] text-[10px] flex items-center justify-center rounded-full">
                {icon.before}
              </div>
            )}
          </div>
        );
      })}

      <img src={avatar} alt="Avatar" className="w-[20px]" />
    </div>
  );
}

export default NavIcons;
