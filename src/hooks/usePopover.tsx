import { useRef, useState, useEffect } from 'react';
import {
  computePosition,
  autoUpdate,
  shift,
  Placement as FloatingPlacement,
  Side as FloatingBasePlacement,
  flip,
  autoPlacement,
} from '@floating-ui/dom';

export type Placement = FloatingPlacement | FloatingBasePlacement;
export type PlacementStrategy = 'autoPlacement' | 'flip';
export interface PopoverProps {
  /* 
    `autoPlacement` is the strategy that looks for the most suitable placement, when no `placement` is provided.
    since is ignored by this strategy, but you can limit the allowed placements.
    * So use `allowedPlacements` with `autoPlacement`

    `flip` placement is the strategy that will try to flip the popper to the opposite side if the
    initial `placement` is not suitable.
    * So use `placement` with `flip`
  */
  placement?: Placement;
  allowedPlacements?: Placement[];
}

export default function usePopover<T extends HTMLElement>({
  placement,
  allowedPlacements,
}: PopoverProps = {}) {
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const [popperPlacement, setPopperPlacement] = useState<Placement | null>(
    null,
  );

  const referenceElement = useRef<T>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

  const handlePopperElement = (e: HTMLDivElement | null) => {
    setPopperElement(e);
  };

  const [marginTop, setMarginTop] = useState<number | undefined>(); // To give the appropriate margin-top to the popper arrow when the popper is placed on the left or right

  useEffect(() => {
    if (referenceElement.current && popperElement) {
      // `autoUpdate` handles dynamic changes
      const cleanup = autoUpdate(
        referenceElement.current,
        popperElement,
        () => {
          if (!referenceElement.current) return;
          computePosition(referenceElement?.current, popperElement, {
            strategy: 'fixed',
            placement: placement || 'bottom',
            middleware: [
              shift({ padding: 3 }),
              placement
                ? flip()
                : autoPlacement({
                    allowedPlacements: allowedPlacements || [
                      'bottom',
                      'bottom-end',
                      'bottom-start',
                      'top',
                      'top-end',
                      'top-start',
                      'right',
                      'right-end',
                      'right-start',
                      'left',
                      'left-end',
                      'left-start',
                    ],
                  }),
            ],
          }).then(({ x, y, placement }) => {
            const newPlacement = placement || 'bottom';

            if (
              ['left', 'right'].some((position) =>
                newPlacement?.includes(position),
              )
            ) {
              const rect = referenceElement?.current?.getBoundingClientRect();

              if (rect?.top) {
                // Calculating the margin-top for the arrow
                const marginTop = (rect?.top || 0) - y + 4; // 4 to give extra margin between the arrow and the reference element
                setMarginTop(marginTop);
              }
            } else {
              setMarginTop(undefined);
            }

            Object.assign(popperElement.style, {
              position: 'fixed',
              left: `${x}px`,
              top: `${y}px`,
            });
            setPopperPlacement(newPlacement);
          });
        },
      );

      // Cleanup on unmount or when dependencies change
      return () => cleanup();
    }
  }, [referenceElement, popperElement, placement, allowedPlacements]);

  const closePopper = (e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e) {
      e.stopPropagation();
    }
    setIsPopperOpen(false);
  };

  const handleButtonClick = (e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e) {
      e.stopPropagation();
    }
    setIsPopperOpen(true);
  };

  return {
    handleButtonClick,
    closePopper,
    handlePopperElement,
    isPopperOpen,
    referenceElement,
    marginTop,
    popperPlacement,
  };
}
