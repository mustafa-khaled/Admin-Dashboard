import { Link } from "react-router-dom";
import { sideBarLinks } from "../../data/data";

function SideBarLinks() {
  return (
    <div className="p-[15px]  border-t border-borderColor">
      <ul>
        {sideBarLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <Link key={link.id} to={link.hrefLink}>
              <li className="flex items-center gap-[10px] py-[15px] cursor-pointer text-textColor">
                <IconComponent className="text-colorBrand" />
                <span className=" hover:text-hoverText">{link.title}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBarLinks;
