import { cn } from '@/utils/helpers';
import React from 'react';
interface Props {
  children: React.ReactNode;
  className?: string;
  color?: string;
  onClick?: VoidFunction;
  active?: boolean;
}
export default function LegendItem({
  className,
  children,
  color,
  onClick,
  active = true,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'flex flex-nowrap items-center gap-0.5',
        { 'cursor-pointer': !!onClick },
        className
      )}
    >
      <div>
        <div
          className={cn("h-3 opacity-30 w-3 rounded-full", {'opacity-100': active})}
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <div className="truncate">
        <span className="text-chart-gray text-sm">{children}</span>
      </div>
    </div>
  );
}
