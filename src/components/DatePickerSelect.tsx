import React from 'react';
import { CalendarIcon } from '@/icons';
import moment from 'moment';

import IconButton from './IconButton';
import { cn } from '@/utils/helpers';
import Popover from './Popover';
import useDatePickerSelect from '@/hooks/useDatePickerSelect';
import DatePicker from './DatePicker';
import LabelInput from './LabelInput';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  selectedDate?: string | undefined | null;
  inputId?: string;
  disabled?: boolean;
  className?: string;
  handleSelectedDate: (value: string | undefined) => void;
  label?: string;
}

export default function DatePickerSelect({
  selectedDate,
  disabled,
  inputId,
  handleSelectedDate,
  label,
  className,
  ...buttonProps
}: Props) {
  const currentDate = selectedDate
    ? moment(selectedDate).format('YYYY-MM-DD')
    : '';
  const {
    isPopperOpen,
    popperPlacement,
    handleClose,
    handlePopperElement,
    referenceElement,
    handleButtonClick,
    handleToday,
  } = useDatePickerSelect(handleSelectedDate);

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {label && <LabelInput>{label}</LabelInput>}

      <div
        ref={referenceElement}
        className={cn(
          'group relative w-full items-center rounded-sm pr-3 outline outline-1 transition-all disabled:border-none',
          'h-12 text-base'
        )}
        {...buttonProps}
      >
        <div className="flex h-full w-full items-center justify-between">
          <div className="flex h-full flex-1 items-center text-left">
            <input
              id={inputId}
              max="9999-12-31"
              onChange={(e) => {
                handleSelectedDate(e.target.value);
              }}
              className={cn(
                'h-full w-full pl-3 focus:outline-none',
                'text-base',
                'bg-transparent'
              )}
              disabled={disabled}
              value={currentDate}
              type="date"
            ></input>
          </div>

          <div>
            <IconButton onClick={!disabled ? handleButtonClick : undefined}>
              <CalendarIcon
                className={cn(
                  !disabled && 'group-hover:text-brand-950',
                  'fill-black'
                )}
              />
            </IconButton>
          </div>
        </div>
      </div>
      <Popover
        isPopperOpen={isPopperOpen}
        closePopper={handleClose}
        handlePopperElement={handlePopperElement}
        popperPlacement={popperPlacement}
      >
        <DatePicker
          handleCLick={handleSelectedDate}
          handleToday={handleToday}
        />
      </Popover>
    </div>
  );
}
