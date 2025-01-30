import moment from 'moment';
import usePopover from './usePopover';

function useDatePickerSelect(
  handleSelectedDate: (value: string | undefined) => void,
  onClose?: VoidFunction,
) {
  const {
    popperPlacement,
    handleButtonClick,
    closePopper,
    handlePopperElement,
    isPopperOpen,
    referenceElement,
  } = usePopover<HTMLDivElement>({ placement: 'bottom' });

  function handleClose() {
    closePopper();
    if (onClose) {
      onClose();
    }
  }

  const handleDaySelect = (date: string) => {
    if (date) {
      handleSelectedDate(moment(date).format('YYYY-MM-DD'));
    }
    handleClose();
  };

  const today = new Date();

  function handleToday() {
    handleSelectedDate(moment(today).format('YYYY-MM-DD'));
    handleClose();
  }

  return {
    isPopperOpen,
    popperPlacement,
    handleButtonClick,
    handleDaySelect,
    handleClose,
    handlePopperElement,
    referenceElement,
    handleToday,
  };
}

export default useDatePickerSelect;
