import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

export default function GraphHandler({ arr }) {
  return (
    <div className="graphHandler">
      <ResponsiveContainer
        width="80%"
        height="100%"
        aspect={3}
        interval={"preserveStartEnd"}
      >
        <AreaChart
          data={arr}
          margin={{
            top: 10,
            right: 30,
            left: 300,
            bottom: 0,
          }}
        >
          <XAxis dataKey="date" interval={"preserveStartEnd"} tickCount={3} />

          <YAxis tickCount={5} />
          <Legend />
          <Area type="monotone" dataKey="bmi" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      <h1 className="chart-caption">7 Day BMI Chart</h1>
    </div>
  );
}
