import Chart from "./Chart";
import FeaturedChart from "./FeaturedChart";

function Charts() {
  return (
    <div className=" px-[20px] py-[5px] flex  gap-[20px] text-textColor ">
      <FeaturedChart />
      <Chart aspect={2 / 1} title="   Last 6 Month (revenue)" />
    </div>
  );
}

export default Charts;
