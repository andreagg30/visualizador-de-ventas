import React from 'react';
import { Placement } from '@/hooks/usePopover';
import useTooltip from '@/hooks/useTooltip';
import ControlledTooltip from './ControlledTooltip';


interface Props {
  children?: React.ReactNode;
  title?: string;
  description?: React.ReactNode;
  placement?: Placement;
  className?: string;
  maxWidth?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  show?: boolean;
}

export default function Tooltip({
  children,
  title,
  icon,
  description,
  className,
  maxWidth,
  placement = 'bottom',
  show,
  disabled,
}: Props): JSX.Element {
  const { isTooltipVisible, handleMouseEnter, handleMouseLeave } = useTooltip();

  return (
    <ControlledTooltip
      open={isTooltipVisible && (show !== undefined ? show : true)}
      title={title}
      icon={icon}
      description={description}
      className={className}
      maxWidth={maxWidth}
      placement={placement}
      onMouseLeave={disabled ? undefined : handleMouseLeave}
      onMouseEnter={disabled ? undefined : handleMouseEnter}
    >
      {children}
    </ControlledTooltip>
  );
}
