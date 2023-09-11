import Chart from "./Chart";
import FeaturedChart from "./FeaturedChart";

function Charts() {
  return (
    <div className=" px-[20px] py-[5px] flex  gap-[20px] ">
      <FeaturedChart />
      <Chart />
    </div>
  );
}

export default Charts;
