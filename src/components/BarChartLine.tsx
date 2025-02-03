/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn, getColors } from '@/utils/helpers';
import {
  Bar,
  ComposedChart,
  LabelList,
  Line,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import CustomBarLabel from './CustomBarLabel';
import VerticalCustomLegend from './VerticalCustomLegend';

export interface BarChartLineItem {
  dataKey: string;
  labelKey?: string;
  type: 'bar' | 'line';
  label: string;
}
interface Props {
  data?: unknown[];
  items: BarChartLineItem[];
  xAxisKey?: string;
  legendKey?: string;
  title?: string;
  className?: string
}
// https://recharts.org/en-US/api/LabelList

export default function BarChartLine({ data, xAxisKey, items, title, className, legendKey }: Props) {
  const colors = getColors(items.length, ['#653819', '#12239E', '#E66C37']);

  return (
    <div className={cn("flex w-full flex-col rounded border p-3 shadow", className)}>
      <div className="text-center">
        <span className="text-xl font-bold text-primary">{title}</span>
      </div>
      <div className="flex min-w-full min-h-full h-[200px] w-[150px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
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
            <XAxis dataKey={xAxisKey} axisLine={false} tickLine={false} />

            <Tooltip />
            {items?.map((item, i) =>
              item.type === 'line' ? (
                <Line
                  key={i}
                  type="linear"
                  dot={false}
                  strokeWidth={3}
                  dataKey={item.dataKey}
                  stroke={colors[i]}
                >
                  {item.labelKey && (
                    <LabelList
                      dataKey={item.labelKey}
                      position="top"
                      content={(props) => <CustomBarLabel {...props} />}
                    />
                  )}
                </Line>
              ) : (
                <Bar
                  key={i}
                  dataKey={item.dataKey}
                  fill={colors[i]}
                  activeBar={<Rectangle />}
                >
                  {item.labelKey && (
                    <LabelList
                      position="top"
                      fill="#000000"
                      content={(props) => (
                        <CustomBarLabel
                          color="#605E5C"
                          bgColor="rgba(255, 255, 255, 0.30)
"
                          {...props}
                        />
                      )}
                      dataKey={item.labelKey}
                    />
                  )}
                </Bar>
              )
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
     <VerticalCustomLegend nameKey={legendKey} colors={colors} data={items} />
    </div>
  );
}
