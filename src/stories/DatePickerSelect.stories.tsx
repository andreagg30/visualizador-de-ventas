import { DatePickerSelect } from '@/components';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Theme/DatePickerSelect',
  component: DatePickerSelect,
  tags: ['autodocs'],
  decorators: (Story) => (
    <div className="flex h-[300px] w-[400px] flex-col items-center justify-center">
      <Story />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    
    label: 'Label:'
  },
} satisfies Meta<typeof DatePickerSelect>;

export default meta;

type Story = StoryObj<typeof DatePickerSelect>;

export const All: Story = {};
