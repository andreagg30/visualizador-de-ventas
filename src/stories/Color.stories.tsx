import { Meta, StoryObj } from '@storybook/react';
import tailwindConfig from '../../tailwind.config';
import { CopyButton } from '@/components';

function ColorsStory() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-3">
      {Object.entries(tailwindConfig.theme.extend.colors).map(
        ([name, value]) => {
          return (
            <div className="flex w-40 flex-col overflow-hidden rounded-lg bg-white shadow-lg">
              <div
                style={{ backgroundColor: value }}
                className="flex w-full justify-end"
              >
                <CopyButton value={name} />
              </div>
              <div className="flex flex-col p-3">
                <span className="text-xs">{value}</span>
                <span>{name}</span>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

const meta = {
  title: 'Theme/Colors',
  component: ColorsStory,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ColorsStory>;

export default meta;

type Story = StoryObj<typeof ColorsStory>;

export const All: Story = {};
