/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/utils/helpers';
import React from 'react';

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  closePopper?: React.MouseEventHandler<any> | undefined;
  handlePopperElement: (e: HTMLDivElement | null) => void;
  popper: any;
  isPopperOpen: boolean;
}

export default function Popper({
  children,
  closePopper,
  handlePopperElement,
  popper,
  className,
  isPopperOpen,
  ...props
}: PopoverProps): JSX.Element | null {
  if (isPopperOpen) {
    return (
      <>
        {closePopper && (
          <div
            onClick={closePopper}
            className="z-60 fixed bottom-0 left-0 right-0 top-0"
          />
        )}

        <div
          tabIndex={-1}
          className={cn('dialog-sheet z-70 my-2 flex flex-col', className)}
          ref={handlePopperElement}
          role="dialog"
          {...props}
          style={popper.styles.popper}
          {...popper.attributes.popper}
        >
          {children}
        </div>
      </>
    );
  }

  return null;
}
