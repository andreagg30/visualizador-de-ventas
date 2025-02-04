/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { isFunction, isString } from 'lodash';
import Popover from './Popover';
import usePopover from '@/hooks/usePopover';
import Divider from './Divider';
import IconButton from './IconButton';
import { CircleUpIcon } from '@/icons';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TooltipItem {
  label: string;
  key: ((item?: any) => void) | string;
}
export interface CustomBarTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  coordinate?: { x: number; y: number };
  items: TooltipItem[];
  handleShowMore?: (currentItem: any) => void;
  handleShowLess?: (currentItem: any) => void;
  showMoreButton?: boolean;
  showLessButton?: boolean;
}

export default function CustomBarTooltip({
  active,
  payload,
  items,
  handleShowMore,
  handleShowLess,
  showMoreButton,
  showLessButton,
  ...props
}: CustomBarTooltipProps) {
  const {
    popperPlacement,
    closePopper,
    handlePopperElement,
    isPopperOpen,
    referenceElement,
    handleButtonClick,
  } = usePopover<any>({ placement: 'bottom' });

  const [isHovered, setIsHovered] = useState(false);

  const currentItem = payload?.[0];
 console.log(isHovered, isPopperOpen);
 

  useEffect(() => {
    if (active && !isHovered) {
      const openTimer = setTimeout(() => {
        handleButtonClick();
      }, 500);

      return () => clearTimeout(openTimer);
    }
  }, [active, props?.coordinate?.x, props?.coordinate?.y, isHovered]);

  useEffect(() => {
    if (isPopperOpen && !isHovered) {
      const closeTimer = setTimeout(() => {
        closePopper();
      }, 100);

      return () => clearTimeout(closeTimer);
    }
  }, [props?.coordinate?.x, props?.coordinate?.y, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (active && currentItem && payload.length) {
    return (
      <>
        {!isHovered && <div className="h-px w-px" ref={referenceElement}></div>}
        <Popover
          isPopperOpen={isPopperOpen}
          handlePopperElement={handlePopperElement}
          popperPlacement={popperPlacement}
        >
          <div
            className="z-[999] flex flex-col rounded-sm border bg-white shadow-sm"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex p-1">
              <table className="w-full">
                <tbody>
                  {items.map((item, i) => (
                    <tr key={i} className="text-xs">
                      <td className="p-0.5">
                        <div className="flex w-full justify-end font-bold">
                          {item.label}
                        </div>
                      </td>
                      <td className="p-0.5">
                        {isString(item.key)
                          ? currentItem?.[item.key]
                          : isFunction(item.key)
                            ? item.key(currentItem)
                            : ''}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {(showMoreButton || showLessButton) && (
              <>
                <Divider />
                <div className="flex items-center gap-2">
                  {showMoreButton && (
                    <IconButton className='w-7 h-7' onClick={handleShowMore}>
                      <CircleUpIcon className='h-4 w-4' />
                    </IconButton>
                  )}

                  {showLessButton && (
                    <IconButton className='w-7 h-7' onClick={handleShowLess}>
                      <CircleUpIcon className='h-4 w-4' />
                    </IconButton>
                  )}
                  <span className='text-xs'>Resumir</span>
                </div>
              </>
            )}
          </div>
        </Popover>
      </>
    );
  }

  return null;
}
