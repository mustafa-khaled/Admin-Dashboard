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

function Chart({ aspect, title }) {
  return (
    <div className="shadow-md  flex-[4] p-[10px] bg-colorGrey2">
      <div>{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
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
            stroke="var(--color-brand-700)"
            fill="var(--color-brand-800)"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
