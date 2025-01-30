import { DropdownOption } from '@/components/Dropdown';
import { useEffect } from 'react';
import usePopover from './usePopover';

export default function useDropdown(
  handleSelect: (value: DropdownOption | DropdownOption[]) => void,
  onPopperOpenChange?: (isOpen: boolean) => void,
) {
  const {
    isPopperOpen,
    popperPlacement,
    handleButtonClick,
    closePopper,
    handlePopperElement,
    referenceElement,
  } = usePopover<HTMLButtonElement>({ allowedPlacements: ['bottom', 'top'] });

  const handleSelectedValue = (value: DropdownOption | DropdownOption[]) => {
    handleSelect(value);
    if (value) {
      closePopper();
    }
  };

  function handleRemove(
    i: number,
    value: DropdownOption[],
    e: React.UIEvent<HTMLDivElement, UIEvent>,
  ) {
    const copy = [...value];
    copy.splice(i, 1);
    handleSelect(copy);
    e.stopPropagation();
  }

  useEffect(() => {
    if (onPopperOpenChange) {
      onPopperOpenChange(isPopperOpen);
    }
  }, [isPopperOpen, onPopperOpenChange]);

  return {
    isPopperOpen,
    popperPlacement,
    handleButtonClick,
    handleSelectedValue,
    closePopper,
    handlePopperElement,
    handleRemove,
    referenceElement,
  };
}
