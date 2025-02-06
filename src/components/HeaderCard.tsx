import { cn } from '@/utils/helpers';
import React from 'react';
interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function HeaderContainer({ className, children }: Props) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-lg border border-secondary bg-white p-3',
        className
      )}
    >
      {children}
    </div>
  );
}
