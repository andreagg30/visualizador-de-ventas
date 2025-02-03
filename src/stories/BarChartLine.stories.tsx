import { BarChartLine } from '@/components';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Theme/BarChartLine',
  component: BarChartLine,
  tags: ['autodocs'],
  decorators: (Story) => (
    <div className="flex h-[300px] w-[500px] flex-col items-center">
      <Story />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    data: [
      {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
        ja: 1000,
      },
      {
        name: 'Page A',
        uv: 70,
        pv: 50,
        amt: 2400,
        ja: 60,
      },
      {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
        ja: 1000,
      },
    ],
    items: [
      {
        dataKey: 'uv',
        labelKey: 'name',
        type: 'bar',
        label: 'test',
      },
      
      {
        dataKey: 'pv',
        type: 'bar',
        label: 'test',
      },
      {
        dataKey: 'ja',
        labelKey: 'name',
        type: 'line',
        label: 'test',
      },
    ],
    xAxisKey: 'name',
    title: 'Ventas por unidad de negocio',
    className: 'w-[600px]',
    legendKey: 'label'
    /*  activeChart: 1,
    tooltipItems: [{label: 'cTipoSucursal', key: 'name'}, {label: 'value', key: (item) => `$${item?.value}.00`}],
    title: 'Ventas por unidad de negocio' */
  },
} satisfies Meta<typeof BarChartLine>;

export default meta;

type Story = StoryObj<typeof BarChartLine>;

export const All: Story = {};
