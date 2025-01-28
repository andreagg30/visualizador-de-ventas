import React from 'react';
import {
  Bar,
  ComposedChart,
  LabelList,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  YAxis,
} from 'recharts';
interface Props {
  children: React.ReactNode;
  className?: string;
}
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
    ja: 1000,
  },
];
// https://recharts.org/en-US/api/LabelList

export default function BarChartTwin({ className, children }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={300}
        data={data}
        barGap={0}
        margin={{
          top: 50,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <YAxis orientation="right" />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle />} ><LabelList position="top" fill="#000000" dataKey="name" /></Bar>
        <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle />} >
        <LabelList position="top" fill="#000000" dataKey="name" /></Bar>
        <Scatter dataKey="ja" fill="#000000" shape="circle">
          <LabelList position="top" fill="white" dataKey="name" />
        </Scatter>
      </ComposedChart>
    </ResponsiveContainer>
  );
}
