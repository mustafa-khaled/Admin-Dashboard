import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-router-dom";

function Widget({ widget, amount, percentage }) {
  const IconComponent = widget.icon;

  return (
    <div className="flex flex-[1] p-[20px] justify-between  bg-colorGrey2  shadow-md rounded-[10px] min-h-[100px] ">
      <div className="flex flex-col justify-between">
        <span className="text-[14px] font-semibold">{widget.title}</span>
        <span className="text-[28px] font-bold">{amount}</span>
        <span className="text-[12px] cursor-pointer underline">
          <Link to={widget.to}>{widget.link}</Link>
        </span>
      </div>
      <div className="flex flex-col justify-between ">
        <div className=" flex items-start text-green-400">
          <KeyboardArrowUpIcon />
          {percentage}%
        </div>
        <div className={`font self-end p-[5px] rounded-md ${widget.styles.bg}`}>
          <IconComponent className={widget.styles.text} />
        </div>
      </div>
    </div>
  );
}

export default Widget;
