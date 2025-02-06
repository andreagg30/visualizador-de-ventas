import React, { useState } from 'react';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import TooltipSlider from './Tooltip';
import { isNumber } from 'lodash';
import moment from 'moment';
import { DateRangeValue } from '../RangeDateSelect';

type Props = {
  onChange: (value: DateRangeValue) => void;
  value?: DateRangeValue;
};

const DateRangePicker: React.FC<Props> = ({ onChange, value }) => {
  const [dates, setDates] = useState<[string, string]>([
    new Date().toISOString().split('T')[0],
    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  ]);
  const twoYearsAgo = moment().subtract(2, 'years').format('YYYY-MM-DD');

  const minDate = new Date(twoYearsAgo).getTime();

  const dateToValue = (date: string): number =>
    Math.floor((new Date(date).getTime() - minDate) / (1000 * 60 * 60 * 24));
  const valueToDate = (value: number): string =>
    new Date(minDate + value * (1000 * 60 * 60 * 24))
      .toISOString()
      .split('T')[0];

  const handleChange = (values: number | number[]): void => {
    if (isNumber(values)) return;
    const fromValue = valueToDate(values[0]);
    const toValue = valueToDate(values[1]);
    setDates([fromValue, toValue]);

    if (onChange) {
      onChange({
        from: fromValue,
        to: toValue,
      });
    }
  };

  const today = moment().format('YYYY-MM-DD');

  return (
    <div className="mx-auto w-60 p-4">
      {/* <label>Fecha Inicio:</label>
      <input
        type="date"
        value={dates[0]}
        readOnly
        className="mb-2 w-full rounded border p-1"
      />
      <label>Fecha Fin:</label>
      <input
        type="date"
        value={dates[1]}
        readOnly
        className="mb-4 w-full rounded border p-1"
      /> */}

      <TooltipSlider
        range
        min={0}
        max={dateToValue(today)}
        value={[
          dateToValue(value?.from || twoYearsAgo),
          dateToValue(value?.to || today),
        ]}
        onChange={handleChange}
        tipFormatter={(value) => {
          if (value === dateToValue(dates[0])) {
            return 'Fecha de inicio';
          }
          return 'Fecha fin';
        }}
        tipProps={{ placement: 'top' }}
        styles={{
          rail: {
            background: '#F3F2F1',
          },
          track: {
            background: '#605E5C',
          },
          handle: {
            backgroundColor: '#FFFFFF',
            border: '2px solid #605E5C',
            boxShadow: 'none',
          },
        }}
      />
    </div>
  );
};

export default DateRangePicker;
