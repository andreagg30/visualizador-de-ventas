import { cn } from '@/utils/helpers';
import React from 'react';
interface Props {
  children: React.ReactNode;
  className?: string;
};
export default function LabelInput({ className, children }: Props) {
  return (
    <div className={cn('font-semibold text-base', className)}>
    {children}
    </div>
  );
}