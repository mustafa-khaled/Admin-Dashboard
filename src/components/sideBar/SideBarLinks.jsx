import { sideBarLinks } from "../../data/data";

function SideBarLinks() {
  return (
    <div className="p-[15px]  border-t border-gray-200">
      <ul>
        {sideBarLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <li
              key={link.id}
              className="flex items-center gap-[5px] py-[10px] cursor-pointer">
              <IconComponent className="text-blue-400" />
              <span className=" hover:text-gray-500">{link.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBarLinks;
