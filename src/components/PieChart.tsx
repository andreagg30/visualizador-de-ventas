import { cn, getColors } from '@/utils/helpers';
import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import LegendItem from './LegendItem';
// https://recharts.org/en-US/examples/TwoSimplePieChart
interface ChartData {
  name: string;
  value: number;
}
interface Props {
  data: ChartData[];
  colors?: string[];
  handleActiveChart?: (index: number) => void;
  activeChart?: number | null;
  className?: string;
  title?: string;
}

interface RenderCustomizedLabel {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  handleActiveChart?: (index: number) => void;
  index: number;
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  handleActiveChart,
  index,
}: RenderCustomizedLabel) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const valueToShow = percent * 100;

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      onClick={handleActiveChart ? () => handleActiveChart(index) : undefined}
    >
      {valueToShow < 10 ? '' : `${valueToShow.toFixed(0)}%`}
    </text>
  );
};

export default function PieChartContainer({
  data,
  handleActiveChart,
  activeChart,
  className,
  title,
}: Props) {
  const colors = getColors(data.length);
  return (
    <div
      className={cn(
        'flex w-full flex-col rounded border p-3 shadow',
        className
      )}
    >
      <div className="text-center">
        <span className="font-bold text-xl text-primary">{title}</span>
      </div>
      <div className="flex">
        <div className="flex h-[150px] w-[150px] flex-1 items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart style={{ outline: 'none' }} width={100} height={100}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(props) =>
                  renderCustomizedLabel({ ...props, handleActiveChart })
                }
                outerRadius={50}
                dataKey="value"
                style={{ outline: 'none' }}
              >
                {data.map((entry, index) => (
                  <Cell
                    onClick={
                      handleActiveChart
                        ? () => handleActiveChart(index)
                        : undefined
                    }
                    style={{
                      outline: 'none',
                      opacity:
                        activeChart !== null &&
                        activeChart !== undefined &&
                        activeChart !== index
                          ? 0.3
                          : 1,
                    }}
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex h-full w-40 flex-col justify-center">
          {data.map((item, i) => (
            <LegendItem
              key={i}
              active={ activeChart !== null &&
                activeChart !== undefined &&
                activeChart === i}
              onClick={
                handleActiveChart ? () => handleActiveChart(i) : undefined
              }
              
              color={colors[i]}
            >
              {item.name}
            </LegendItem>
          ))}
        </div>
      </div>
    </div>
  );
}
