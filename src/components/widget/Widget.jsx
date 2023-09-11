import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Widget({ widget }) {
  const IconComponent = widget.icon;

  return (
    <div className="flex grow-[1] p-[10px] justify-between  shadow-md rounded-[10px] min-h-[100px] ">
      <div className="flex flex-col justify-between">
        <span className="text-[14px] text-gray-300 font-semibold">
          {widget.title}
        </span>
        <span className="text-[28px] font-bold">{widget.counter}</span>
        <span className="text-[12px] cursor-pointer underline">
          {widget.link}
        </span>
      </div>
      <div className="flex flex-col justify-between ">
        <div className=" flex items-start text-green-400">
          <KeyboardArrowUpIcon />
          {widget.percentage}
        </div>
        <div className={`font self-end p-[5px] rounded-md ${widget.styles.bg}`}>
          <IconComponent className={widget.styles.text} />
        </div>
      </div>
    </div>
  );
}

export default Widget;
