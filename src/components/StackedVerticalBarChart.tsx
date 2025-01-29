import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const dataDef = [
  { name: 'Lunes', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Martes', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Miercoles', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Jueves', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Viernes', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Sabado', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Domingo', uv: 3490, pv: 4300, amt: 2100 },
];
interface Props {
    data?: unknown[]
}
export default function StackedVerticalBarChart({data=dataDef}: Props) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 20, right: 0, left: 10, bottom: 5 }}
      >
        <XAxis type="number" tick={false} axisLine={false} />
        <YAxis 
          type="category" 
          dataKey="name" 
          tickLine={false}
          tickMargin={60}
          tick={({ x, y, payload }) => (
            <text x={x} y={y} fill="#000" fontSize={14} textAnchor="left">
              {payload.value}
            </text>
          )}
          axisLine={false}
        />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="pv"
          label={{ position: 'center' }}
          stackId="a"
          fill="#8884d8"
        />
        <Bar
          dataKey="uv"
          label={{ position: 'center' }}
          stackId="a"
          fill="#82ca9d"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
