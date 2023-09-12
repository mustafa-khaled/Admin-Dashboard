import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Area,
} from "recharts";
import { chartData } from "../../data/data";

import { curveCardinal } from "d3-shape";

const cardinal = curveCardinal.tension(0.2);

function Chart() {
  return (
    <div className="shadow-md grow-[4] p-[10px] text-gray-600">
      <div>Last 6 Month (revenue)</div>
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <AreaChart
          width={500}
          height={400}
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
