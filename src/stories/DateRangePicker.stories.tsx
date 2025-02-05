import DateRangePicker from '@/components/DateRangePicker';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Theme/DateRangePicker',
  component: DateRangePicker,
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
    
  },
} satisfies Meta<typeof DateRangePicker>;

export default meta;

type Story = StoryObj<typeof DateRangePicker>;

export const All: Story = {};
