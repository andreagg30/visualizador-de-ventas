import { Dropdown } from '@/components';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Theme/Dropdown',
  component: Dropdown,
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
    value: 'hola',
    helperText: 'helper text',
    className: 'min-w-[200px]',
    options: [{ label: 'item1', value: 1 }, { label: 'item2', value: 2 }],
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const All: Story = {};
