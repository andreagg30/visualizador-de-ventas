/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExpandMoreIcon } from '@/icons';
import React from 'react';
import { useDropdown } from '@/hooks';
import Popover from './Popover';
import { cn } from '@/utils/helpers';

export type DropdownValueType = number | string | boolean;
export interface DropdownOption {
  value?: DropdownValueType;
  label?: string | JSX.Element;
  [key: string]: any;
}

export type SelectedValueType = DropdownOption | DropdownOption[] | null;
export interface DropdownProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  defaultText?: string;
  options: DropdownOption[];
  selectedValue?: SelectedValueType;
  handleSelect: (value: DropdownOption | DropdownOption[]) => void;
  error?: boolean;
  keyName?: string;
  success?: boolean;
  loading?: boolean;
  onPopperOpenChange?: (isOpen: boolean) => void;
  helperText?: string;
  warning?: boolean;
  icon?: React.ReactElement;
}

export default function Dropdown({
  disabled,
  defaultText,
  options,
  selectedValue,
  handleSelect,
  keyName,
  className,
  onPopperOpenChange,
  icon,
  ...props
}: DropdownProps) {
  const {
    isPopperOpen,
    popperPlacement,
    handleButtonClick,
    closePopper,
    handlePopperElement,
    referenceElement,
    handleSelectedValue,
  } = useDropdown(handleSelect, onPopperOpenChange);

  const offsetWidth = referenceElement?.current?.offsetWidth;
  return (
    <div
      className={cn(
        'group flex flex-col text-[1rem] font-normal leading-[1.5rem]',
        className,
      )}
    >
      <button
        disabled={disabled}
        className={cn(
          `flex outline outline-1 transition-all focus:outline-2 disabled:border-none disabled:outline-1`,
          'h-12',
          'relative items-center rounded-sm border-none pr-1 outline-offset-0',
          {
            'outline-2': isPopperOpen,
          },
          'bg-brand-50 text-brand-950 outline-brand-950',
          className,
        )}
        onClick={handleButtonClick}
        ref={referenceElement}
        tabIndex={0}
        type="button"
        {...props}
      >
        <div
          className={cn(
            'flex-auto overflow-hidden pl-3 text-start',
            selectedValue && 'pr-3',
          )}
        >
          {
            ((selectedValue as DropdownOption)?.[keyName || 'label'] ??
            defaultText)
          }
        </div>

        <div
          className={cn('w-6 transition-all', {
            'rotate-180': !icon && isPopperOpen,
          })}
        >
          <div className="flex w-6 overflow-hidden">
            {icon ? (
              React.cloneElement(icon, { className: 'group transition-all' })
            ) : (
              <ExpandMoreIcon className={cn('fill-black', )} />
            )}
          </div>
        </div>
      </button>


      <Popover
        isPopperOpen={isPopperOpen}
        closePopper={closePopper}
        handlePopperElement={handlePopperElement}
        popperPlacement={popperPlacement}
      >
        <ul
          style={{ minWidth: offsetWidth ? `${offsetWidth}px` : undefined }}
          className="custom-dropdown-list z-50 my-2 max-h-60 overflow-y-auto overflow-x-hidden rounded-lg bg-white shadow-[0px_2px_5px_-1px_rgba(50,50,93,0.25),0px_1px_3px_-1px_rgba(0,0,0,0.3)]"
        >
          {options.map((item, i) => (
            <li
              key={i}
              className="cursor-pointer border-b p-0 text-black typography-body-md hover:bg-brand-50"
            >
              <button
                onClick={() =>
                  handleSelectedValue(
                    (item as DropdownOption),
                  )
                }
                className="h-full w-full px-6 py-2 text-left"
              >
                {item[keyName || 'label']}
              </button>
            </li>
          ))}
        </ul>
      </Popover>
    </div>
  );
}
