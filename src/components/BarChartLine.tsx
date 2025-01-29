import React from 'react';
import {
  Bar,
  ComposedChart,
  LabelList,
  Legend,
  Line,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from 'recharts';
interface Props {
  data?: unknown[]
}
const dataDef = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
    ja: 1000,
  },
  {
    name: 'Page A',
    uv: 70,
    pv: 50,
    amt: 2400,
    ja: 60,
  },
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
    ja: 1000,
  },
];
// https://recharts.org/en-US/api/LabelList

export default function BarChartLine({ data= dataDef }: Props) {
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
        
        <Line type="linear" dot={false} dataKey="ja" stroke="#e86f37">
        <LabelList position="top" fill="white" dataKey="name" />

        </Line>

      </ComposedChart>
    </ResponsiveContainer>
  );
}
