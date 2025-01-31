import { TextField } from '@/components';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Theme/TextField',
  component: TextField,
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
    label: 'Label:'
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof TextField>;

export const All: Story = {};
