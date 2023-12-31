import { CircularProgressbar } from "react-circular-progressbar";
import { featuredChartData } from "../../data/data";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";

function FeaturedChart() {
  return (
    <div className="shadow-md p-[10px] bg-colorGrey2 text-textColor">
      <div className="flex items-center justify-between ">
        <h1>Total Revenue</h1>
        <MoreVertIcon
          fontSize="small"
          className="cursor-pointer text-textColor"
        />
      </div>
      <div className="p-[20px] flex flex-col items-center justify-center gap-[10px]">
        <div className="w-[100px] h-[100px]">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p>Total sales made today.</p>
        <p className="text-[28px] font-semibold">$450</p>
        <div className="flex items-center justify-between w-full text-center">
          {featuredChartData.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id}>
                <div className=" text-[14px]">{item.title}</div>
                <div>
                  <div
                    className={`flex font-semibold items-center gap-[5px] text-[14px] ${item.styles} mt-[10px]`}>
                    <Icon fontSize="small" />
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
