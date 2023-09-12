import { Link } from "react-router-dom";
import { sideBarLinks } from "../../data/data";

function SideBarLinks() {
  return (
    <div className="p-[15px]  border-t border-gray-200">
      <ul>
        {sideBarLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <Link key={link.id} to={link.hrefLink}>
              <li className="flex items-center gap-[5px] py-[15px] cursor-pointer">
                <IconComponent className="text-blue-400" />
                <span className=" hover:text-gray-500">{link.title}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBarLinks;
