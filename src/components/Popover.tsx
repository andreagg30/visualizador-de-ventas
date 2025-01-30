import { Placement } from '@floating-ui/dom';
import React from 'react';
import ReactDOM from 'react-dom';

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  closePopper?: React.MouseEventHandler<HTMLDivElement> | undefined;
  handlePopperElement: (e: HTMLDivElement | null) => void;
  popperPlacement: Placement | null;
  isPopperOpen: boolean;
}

export default function Popover({
  children,
  closePopper,
  handlePopperElement,
  popperPlacement,
  isPopperOpen,
  ...props
}: PopoverProps): JSX.Element | null {
  if (isPopperOpen) {
    return ReactDOM.createPortal(
      /*
       Create dom portal to render the Popover component on top of the body element
       FloatingUI is not supporting z index stacking yet, causing the Popover to be 
       rendered behind some elements. Refer to this for future updates:
       https://floating-ui.com/docs/misc#z-index-stacking
       */
      <>
        {closePopper && (
          <div
            onClick={closePopper}
            className="fixed bottom-0 left-0 right-0 top-0 z-60"
          />
        )}

        <div
          tabIndex={-1}
          className={'dialog-sheet absolute z-[99]'}
          ref={handlePopperElement}
          role="dialog"
          {...props}
          data-popper-placement={popperPlacement}
        >
          {children}
        </div>
      </>,
      document.body,
    );
  }

  return null;
}
