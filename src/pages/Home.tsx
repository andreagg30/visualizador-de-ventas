import { BarChartTwin, PieChartContainer } from "@/components";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[1120px] flex-col gap-32 pt-20">
      home
      <div className="h-96 w-96">

      <PieChartContainer data={[{name: 'hola', value :20},{name: 'hola', value : 70, } ]} />
      </div>
      <div className="h-96 w-96">

      <BarChartTwin data={[{name: 'hola', value :20},{name: 'hola', value : 70, } ]} />
      </div>
    </div>
  );
}
