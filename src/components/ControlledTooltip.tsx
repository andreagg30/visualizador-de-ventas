import React, { CSSProperties } from 'react';
import usePopover, { Placement } from '@/hooks/usePopover';
import Popover from './Popover';
import { cn } from '@/utils/helpers';
import { TriangleIcon } from '@/icons';
export type ControlledTooltipVariants =
  | 'default'
  | 'light'
  | 'dark'
  | 'error'
  | 'primary'
  | 'warning'
  | 'success';
export type ControlledTooltipTextSizes = '2xl' | 'sm' | 'base' | 'xs';
interface Props {
  children?: React.ReactNode;
  content?: React.ReactNode;
  open?: boolean;
  title?: string;
  description?: React.ReactNode;
  placement?: Placement;
  allowedPlacements?: Placement[];
  textSize?: ControlledTooltipTextSizes;
  className?: string;
  variant?: ControlledTooltipVariants;
  icon?: React.ReactNode;
  maxWidth?: string;
  popoverStyle?: CSSProperties;
  onMouseLeave?: VoidFunction;
  closeIcon?: boolean;
  onMouseEnter?: VoidFunction;
  handleCloseTooltip?: VoidFunction;
  offsetWidth?: boolean;
  hideTriangle?: boolean;
}


const variantTriangleClasses = {
  default: 'text-black',
  primary: 'text-brand-950',
  light: 'text-brand-950',
  dark: 'text-black',
  error: 'text-error-700',
  warning: 'text-warning-900',
  success: 'text-success-700',
};

const variantTriangleColorClasses = {
  default: 'text-white',
  primary: 'text-disabled-content-50',
  light: 'text-white',
  dark: 'text-brand-950',
  error: 'text-white',
  warning: 'text-white',
  success: 'text-white',
};

const variantBgColorClasses = {
  default: 'bg-white',
  primary: 'bg-disabled-content-50',
  light: 'bg-white',
  dark: 'bg-brand-950',
  error: 'bg-white',
  warning: 'bg-white',
  success: 'bg-white',
};

export const textSizeClasses = {
  '2xl': 'typography-title-md',
  base: 'typography-body-xl',
  sm: 'typography-body-md',
  xs: 'typography-body-sm',
};

export default function ControlledTooltip({
  open,
  children,
  content,
  title,
  variant = 'default',
  description,
  textSize = 'sm',
  className,
  placement = 'right-start',
  allowedPlacements,
  maxWidth = '400px',
  onMouseLeave,
  offsetWidth,
  onMouseEnter,
  closeIcon,
  hideTriangle,
  popoverStyle
}: Props): JSX.Element {
  const {
    popperPlacement,
    handlePopperElement,
    isPopperOpen,
    referenceElement,
  } = usePopover<HTMLDivElement>({ placement, allowedPlacements });

  const popoverPlacement: Placement = popperPlacement || placement;
  const triangle = (
    <div className={`relative flex h-4 w-full items-end justify-center`}>
      <div className="relative z-40 flex h-4 w-4 items-end justify-center overflow-hidden">
        <div className="absolute bottom-0 z-40 h-3 w-4 overflow-hidden">
          <TriangleIcon
            className={cn(variantTriangleColorClasses[variant], 'h-4 w-4')}
          />
        </div>
        <div className="absolute bottom-0 z-10 h-4 w-6 overflow-hidden">
          <TriangleIcon
            className={cn(variantTriangleClasses[variant], 'h-6 w-6')}
          />
        </div>
      </div>
    </div>
  );

  const variantClasses = {
    default: 'border-black',
    primary: 'border-brand-950',
    light: 'border-brand-950',
    dark: 'border-black text-white',
    error: 'border-error-700',
    warning: 'border-warning-900',
    success: 'border-success-700',
  };

  const popperClassNames: Record<string, string> = {
    bottom: 'flex-col items-center mt-0',
    'bottom-end': 'flex-col items-end mt-0',
    'bottom-start': 'flex-col items-start mt-0',
    top: 'flex-col-reverse items-center mt-0',
    'top-end': 'flex-col-reverse items-end mb-0',
    'top-start': 'flex-col-reverse items-start mb-0',
    right: 'items-center',
    'right-end': 'items-end',
    'right-start': 'flex-row',
    left: 'flex-row-reverse items-center',
    'left-end': 'flex-row-reverse',
    'left-start': 'flex-row-reverse',
  };

  const triangleClassNames: Record<string, string> = {
    bottom: '',
    'bottom-end': '-mb-0.5 mr-1',
    'bottom-start': '-mb-0.5 ml-1',
    top: 'rotate-180 -mt-0.5',
    'top-end': 'rotate-180 -mt-0.5 mr-1',
    'top-start': 'rotate-180 -mt-0.5 ml-1',
    right: '-rotate-90 -mr-[1.7px]',
    'right-end': '-rotate-90 mb-2 -mr-0.5',
    'right-start': '-rotate-90 -mr-0.5',
    left: 'rotate-90 -ml-[1.7px]',
    'left-end': 'rotate-90 mb-1 -ml-[1.7px]',
    'left-start': 'rotate-90 -ml-[1.7px]',
  };

  const currentOffsetWidth = referenceElement?.current?.offsetWidth;

  return (
    <>
      <div
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        ref={referenceElement}
        className={className}
        tabIndex={0}
      >
        {children}
      </div>
      {open && (
        <Popover
          isPopperOpen={isPopperOpen || open}
          handlePopperElement={handlePopperElement}
          popperPlacement={popoverPlacement}
        >
          <div
          style={popoverStyle}
            className={cn(
              'flex',
              { 'items-end': popoverPlacement === 'left-end' },
              popperClassNames[popoverPlacement],
            )}
          >
            {!hideTriangle && (
              <div
                className={cn(
                  'z-50 h-4 w-4',
                  triangleClassNames[popoverPlacement],
                )}
               /*  style={{
                  marginTop: marginTop,
                }} */
              >
                {triangle}
              </div>
            )}
            <div
              className={cn(
                variantBgColorClasses[variant],
                'border-2',
                'flex items-center text-black',
                variantClasses[variant],
                closeIcon ? 'pb-3 pl-3 pr-[22px] pt-3' : 'p-3',
                'gap-3 rounded-lg',
                { '-mt-0.5': placement === 'bottom' },
                'relative',
              )}
              style={{
                maxWidth:
                  offsetWidth && currentOffsetWidth
                    ? `${currentOffsetWidth}px`
                    : maxWidth,
              }}
            >
             

             

              <div
                className={cn(
                  `relative flex flex-1 whitespace-pre-line leading-none`,
                  textSizeClasses[textSize],
                )}
              >
                {content || (
                  <span className="df-regular break-words font-normal not-italic leading-snug">
                    <strong>{title}</strong> {description}
                  </span>
                )}
                <button className="w-0"></button>
              </div>
            </div>
          </div>
        </Popover>
      )}
    </>
  );
}
