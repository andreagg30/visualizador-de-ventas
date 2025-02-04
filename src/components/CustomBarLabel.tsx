/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Popover from './Popover';
import usePopover from '@/hooks/usePopover';
import { cn } from '@/utils/helpers';
import { Placement } from '@floating-ui/dom';

interface CustomBarLabelProps {
  x?: any;
  y?: any;
  value?: any;
  bgColor?: string;
  top?: boolean;
  color?: string;
  width?: any;
  placement?: Placement;
  variant?: 'primary' | 'secondary';
}

const CustomBarLabel: React.FC<CustomBarLabelProps> = ({
  x = 0,
  y = 0,
  value,
  variant = 'primary',
  placement = 'top',
  width,
}) => {
  const { popperPlacement, handlePopperElement, referenceElement } =
    usePopover<any>({ placement: placement });

  if (!value) return null; // Evita etiquetas vacías

  return (
    <>
      <g ref={referenceElement} transform={`translate(${x},${y})`}>
        <rect width={width} height={3} fill={'transparent'} />
      </g>
      <Popover
        isPopperOpen={true}
        handlePopperElement={handlePopperElement}
        popperPlacement={popperPlacement}
      >
        <div className="p-1">
          <div
            style={{
              backgroundColor:
                variant === 'secondary'
                  ? 'rgba(18, 35, 158, 0.5)'
                  : 'rgba(255, 255, 255, 0.70)',
            }}
            className={cn('rounded px-2 text-xs text-white', {
              'text-chart-gray': variant === 'primary',
              'text-white': variant === 'secondary',
            })}
          >
            {value}
          </div>
        </div>
      </Popover>
    </>
  );
};

export default CustomBarLabel;
