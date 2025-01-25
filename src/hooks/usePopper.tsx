/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';
import { usePopper as useReactPopper } from 'react-popper';

export type Placement =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export default function usePopper(placement?: Placement) {
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  const referenceElement = useRef<any>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const handlePopperElement = (e: HTMLDivElement | null) => {
    setPopperElement(e);
  };

  const popper = useReactPopper(referenceElement.current, popperElement, {
    placement: placement || 'bottom',
    modifiers: [
      {
        name: 'preventOverflow',
      },
      {
        name: 'computeStyles',
        options: {
          gpuAcceleration: false,
        },
      },
    ],
    strategy: 'fixed',
  });

  const closePopper = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e) {
      e.stopPropagation();
    }
    setIsPopperOpen(false);
  };

  const handleButtonClick = (e?: React.MouseEvent<any, MouseEvent>) => {
    if (e) {
      e.stopPropagation();
    }
    setIsPopperOpen(true);
  };

  return {
    popper,
    handleButtonClick,
    closePopper,
    handlePopperElement,
    isPopperOpen,
    referenceElement,
  };
}
