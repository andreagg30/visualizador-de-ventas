import { cn } from '@/utils/helpers';
import LegendItem from './LegendItem';
import { ChartData } from './PieChart';
import { usePaginator } from '@/hooks';
import IconButton from './IconButton';
import { ChevronLeft, ExpandMoreIcon } from '@/icons';
interface Props {
  data: ChartData[];
  handleActiveChart?: (index: number) => void;
  activeChart?: number | null;
  className?: string;
  colors: string[];
}

export default function CustomLegend({
  className,
  handleActiveChart,
  activeChart,
  data,
  colors,
}: Props) {
  const { currentItems, isAtStart, isAtEnd, handleNext, handleBack } =
    usePaginator(data);
  return (
    <div className={cn('flex h-full w-40 flex-col justify-center', className)}>
      <div className="flex h-6 justify-center">
        {!isAtStart && (
          <IconButton className="h-6 w-6" onClick={handleBack}>
            <ExpandMoreIcon className="h-6 w-6 rotate-180" />
          </IconButton>
        )}
      </div>
      {currentItems.map((item, i) => (
        <LegendItem
          key={i}
          active={
            activeChart !== null &&
            activeChart !== undefined &&
            activeChart === i
          }
          onClick={handleActiveChart ? () => handleActiveChart(i) : undefined}
          color={colors[i]}
        >
          {item.name}
        </LegendItem>
      ))}
      <div className="flex h-6 justify-center">
        {!isAtEnd && (
          <IconButton className="h-6 w-6" onClick={handleNext}>
            <ExpandMoreIcon className="h-6 w-6" />
          </IconButton>
        )}
      </div>
    </div>
  );
}
