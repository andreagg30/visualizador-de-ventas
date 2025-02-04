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
import { TooltipItem } from './CustomTooltip';
import CustomBarTooltip from './CustomBarTooltip';
import { useMemo } from 'react';

export interface BarChartLineItem {
  dataKey: string;
  labelKey?: string;
  type: 'bar' | 'line';
  label: string;
}
interface Props {
  data?: any[];
  items: BarChartLineItem[];
  xAxisKey?: string;
  legendKey?: string;
  title?: string;
  className?: string;
  tooltipItems?: TooltipItem[];
  handleActiveChart?: (index: number) => void;
  activeChart?: number | null;
  handleActiveChartGroup?: (index: number) => void;
  activeChartGroup?: number | null;
}
// https://recharts.org/en-US/api/LabelList

function handleDot(params: any) {
  if (params.payload.dot) {
    return (
      <circle
        cx={params.cx}
        cy={params.cy}
        r={4}
        fill={params.stroke}
        stroke="white"
        strokeWidth={2}
      />
    );
  } else {
    return <></>;
  }
}

export default function BarChartLine({
  data,
  xAxisKey,
  items,
  title,
  className,
  legendKey,
  tooltipItems,
  handleActiveChart,
  activeChart,
  handleActiveChartGroup,
  activeChartGroup,
}: Props) {
  const colors = getColors(items.length, ['#653819', '#12239E', '#E66C37']);

  const newData = useMemo(() => {
    if (activeChart === undefined || activeChart === null || !data) {
      return data;
    } 
    return data.map((item, i) => ({
      ...item,
      dot:
        activeChart !== null && activeChart !== undefined && activeChart === i,
      style:
        activeChart !== null && activeChart !== undefined && activeChart !== i
          ? {
              opacity: 0.3,
            }
          : undefined,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeChart]);
  console.log(newData);
  

  return (
    <div
      className={cn(
        'flex w-full flex-col rounded border p-3 shadow',
        className
      )}
    >
      <div className="text-center">
        <span className="text-xl font-bold text-primary">{title}</span>
      </div>
      <div className="flex justify-center">
        <div className="min-w-full] flex h-[300px] w-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={newData}
              barGap={0}
              margin={{
                top: 50,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <YAxis orientation="right" />
              <XAxis
                tickMargin={14}
                dataKey={xAxisKey}
                axisLine={false}
                tickLine={false}
              />

              {items?.map((item, index) =>
                item.type === 'line' ? (
                  <Line
                    key={index}
                    type="linear"
                    dot={handleDot}
                    strokeWidth={3}
                    dataKey={item.dataKey}
                    stroke={colors[index]}
                    onClick={
                      handleActiveChart
                        ? () => handleActiveChart(index)
                        : undefined
                    }
                    style={{
                      opacity:
                        activeChartGroup !== null &&
                        activeChartGroup !== undefined &&
                        activeChartGroup !== index
                          ? 0.3
                          : 1,
                    }}
                  >
                    {item.labelKey && (
                      <LabelList
                        dataKey={item.labelKey}
                        position="top"
                        content={(props) => (
                          <CustomBarLabel
                            placement="bottom"
                            variant="secondary"
                            {...props}
                          />
                        )}
                      />
                    )}
                  </Line>
                ) : (
                  <Bar
                    key={index}
                    dataKey={item.dataKey}
                    fill={colors[index]}
                    activeBar={<Rectangle />}
                    onClick={
                      handleActiveChart
                        ? () => handleActiveChart(index)
                        : undefined
                    }
                    style={{
                      opacity:
                        activeChartGroup !== null &&
                        activeChartGroup !== undefined &&
                        activeChartGroup !== index
                          ? 0.3
                          : 1,
                    }}
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
                            placement="top"
                            {...props}
                          />
                        )}
                        dataKey={item.labelKey}
                      />
                    )}
                  </Bar>
                )
              )}
              <Tooltip
                content={
                  <CustomBarTooltip showMoreButton items={tooltipItems || []} />
                }
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
      <VerticalCustomLegend
        className="mt-4"
        nameKey={legendKey}
        handleActiveChart={handleActiveChartGroup}
        activeChart={activeChartGroup}
        colors={colors}
        data={items}
      />
    </div>
  );
}
