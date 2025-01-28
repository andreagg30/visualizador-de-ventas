import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
// https://recharts.org/en-US/examples/TwoSimplePieChart
interface ChartData {
    name: string,
    value: number,
}
interface Props {
    data: ChartData[];
    colors?: string[]
};


interface RenderCustomizedLabel {
    cx: number, cy: number, midAngle: number, innerRadius: number, outerRadius: number, percent: number
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: RenderCustomizedLabel) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
const valueToShow = percent * 100
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {valueToShow < 10 ? '' : `${(valueToShow).toFixed(0)}%`}
    </text>
  );
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


export default function PieChartContainer({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
           data={data}
           cx="50%"
           cy="50%"
           labelLine={false}
           label={renderCustomizedLabel}
           outerRadius={80}
           
           dataKey="value"
          >
             {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
  );
}