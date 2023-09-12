import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { featuredChartData } from "../../data/data";

function FeaturedChart() {
  return (
    <div className=" shadow-md flex-[2] p-[10px]  text-gray-600">
      <div className="flex items-center justify-between text-gray-500">
        <h1>Total Revenue</h1>
        <MoreVertIcon fontSize="small" className="cursor-pointer" />
      </div>
      <div className="p-[20px] flex flex-col items-center justify-center gap-[10px]">
        <div className="w-[100px] h-[100px]">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p>Total sales made today.</p>
        <p className="text-[28px] font-semibold">$450</p>
        <div className="flex items-center justify-between w-full text-center">
          {featuredChartData.map((item) => {
            return (
              <div key={item.id}>
                <div className="text-gray-500 text-[14px]">{item.title}</div>
                <div>
                  <div
                    className={`flex font-semibold items-center gap-[5px] text-[14px] ${item.styles} mt-[10px]`}>
                    <KeyboardArrowDownIcon fontSize="small" />
                    <div>{item.value}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeaturedChart;
