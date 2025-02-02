import { PieChart } from '@/components';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Theme/PieChart',
  component: PieChart,
  tags: ['autodocs'],
  decorators: (Story) => (
    <div className="flex h-[300px] w-[500px] flex-col items-center ">
      <Story />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    data: [
      { name: 'RESTAURANTE HEIUEHFI FHI', value: 70 },
      { name: 'PASTELERÍA', value: 30 },
      { name: 'PASTELERÍA2', value: 30 },
      { name: 'PASTELERÍA3', value: 30 },
      { name: 'PASTELERÍA4', value: 30 },
      { name: 'PASTELERÍA5', value: 30 },
    ],
    activeChart: 1,
    tooltipItems: [{label: 'cTipoSucursal', key: 'name'}, {label: 'value', key: (item) => `$${item?.value}.00`}],
    title: 'Ventas por unidad de negocio'
  },
} satisfies Meta<typeof PieChart>;

export default meta;

type Story = StoryObj<typeof PieChart>;

export const All: Story = {};
