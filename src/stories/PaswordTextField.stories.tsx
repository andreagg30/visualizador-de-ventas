import { PaswordTextField } from '@/components';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Theme/PaswordTextField',
  component: PaswordTextField,
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
} satisfies Meta<typeof PaswordTextField>;

export default meta;

type Story = StoryObj<typeof PaswordTextField>;

export const All: Story = {};
