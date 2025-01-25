import * as icons from '@/icons';
import { Meta, StoryObj } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

const components = Object.entries(icons);

const IconsStory = (props: { size: string; color: string }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const className = [props.size, props.color].join(' ');
  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const iconList = components.filter(([name]) => {
    const regex = new RegExp(searchTerm, 'gi');
    return regex.exec(name);
  });

  return (
    <div className="flex flex-col">
      <div className="mb-5">
        <input
          value={searchTerm}
          onChange={onSearch}
          type="text"
          placeholder="Search Icon"
          className="input input-bordered input-primary w-full max-w-xs text-black"
        />
      </div>
      <div className="flex flex-wrap gap-4">
        {iconList.map(([name, Icon], i) => (
          <div
            key={i}
            className="mb-3 flex w-28 flex-col items-center break-all text-center"
          >
            <Icon className={className} />
            <span className="pt-1 text-xs text-zinc-400">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SIZES = ['w-4 h-4', 'w-8 h-8', 'w-10 h-10', 'w-16 h-16', 'w-20 h-20'];
const COLORS = ['fill-black', 'fill-orange'];
const meta: Meta<typeof IconsStory> = {
  title: 'Theme/Icons',
  component: IconsStory,
  argTypes: {
    size: {
      control: 'select',
      options: SIZES,
    },
    color: {
      control: 'select',
      options: COLORS,
    },
  },
  args: {
    color: COLORS[0],
    size: SIZES[2],
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
