import { cn } from '@/utils/helpers';
import DatePickerSelect from './DatePickerSelect';
import DateRangePicker from './DateRangePicker';

export interface DateRangeValue {
  from?: string | null;
  to?: string | null;
}
interface Props {
  value?: DateRangeValue;
  onChange: (value: DateRangeValue) => void;
  className?: string;
}
export default function RangeDateSelect({ className, onChange, value }: Props) {
  return (
    <div className={cn('flex flex-col', className)}>
      <div className="flex gap-3">
        <DatePickerSelect
          handleSelectedDate={(dateValue) =>
            onChange({ from: dateValue || null, to: value?.to })
          }
          selectedDate={value?.from}
        />
        <DatePickerSelect
          handleSelectedDate={(dateValue) =>
            onChange({ to: dateValue || null, from: value?.from })
          }
          selectedDate={value?.to}
        />
      </div>
      <div className="flex">
        <DateRangePicker
          onChange={(dateValue) => {
            onChange(dateValue);
          }}
          value={value}
        />
      </div>
    </div>
  );
}
