import {
  BarChartLine,
  BarChartTwin,
  DatePicker,
  Dropdown,
  PieChartContainer,
  StackedVerticalBarChart,
  TreeChart,
} from '@/components';
import DatePickerSelect from '@/components/DatePickerSelect';

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[1120px] flex-col gap-32 pt-20">
      home
      <DatePickerSelect />
      <Dropdown 
      className='max-w-40 p-3'
      options={[{
        label: 'hola',
        value: 'adios'
      }]}
      />
      <div className="h-96 w-96">
        <TreeChart
        
        />
      </div>
      <div className="h-[500px] w-[500px]">
        <StackedVerticalBarChart
          
        />
      </div>
      <div className="h-96 w-96">
        <PieChartContainer
          data={[
            { name: 'hola', value: 20 },
            { name: 'hola', value: 70 },
          ]}
        />
      </div>
      <div className="h-96 w-96">
        <BarChartTwin
          
        />
      </div>
      <div className="h-96 w-96">
        <BarChartLine
          
        />
      </div>
    </div>
  );
}
