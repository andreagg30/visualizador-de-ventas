/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/utils/helpers';
import LegendItem from './LegendItem';
import { usePaginator } from '@/hooks';
interface Props {
  data: any[];
  handleActiveChart?: (index: number) => void;
  activeChart?: number | null;
  className?: string;
  nameKey?: string;
  colors: string[];
}

export default function VerticalCustomLegend({
  className,
  handleActiveChart,
  activeChart,
  data,
  colors,
  nameKey
}: Props) {
    usePaginator(data);
  return (
    <div className={cn('flex gap-1 justify-center', className)}>
      {data.map((item, i) => (
        <LegendItem
          key={i}
          active={
            activeChart !== null ||
            activeChart !== undefined ||
            activeChart === i
          }
          onClick={handleActiveChart ? () => handleActiveChart(i) : undefined}
          color={colors[i]}
        >
          {item[nameKey || 'name']}
        </LegendItem>
      ))}
    </div>
  );
}
