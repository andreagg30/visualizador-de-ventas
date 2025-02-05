import React, { useState } from 'react';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import TooltipSlider from './Tooltip';
import { isNumber } from 'lodash';

type Props = {
  handleFromDate?: (value: string) => void;
  handleToDate?: (value: string) => void;
};

const RangeSliderWithTooltip: React.FC<Props> = ({
  handleFromDate,
  handleToDate,
}) => {
  const [dates, setDates] = useState<[string, string]>([
    new Date().toISOString().split('T')[0],
    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  ]);

  const minDate = new Date('2024-01-01').getTime();

  const dateToValue = (date: string): number =>
    Math.floor((new Date(date).getTime() - minDate) / (1000 * 60 * 60 * 24));
  const valueToDate = (value: number): string =>
    new Date(minDate + value * (1000 * 60 * 60 * 24))
      .toISOString()
      .split('T')[0];

  const handleChange = (values: number | number[]): void => {
    if (isNumber(values)) return;
    const toValue = valueToDate(values[0]);
    const fromValue = valueToDate(values[1]);
    setDates([toValue, fromValue]);
    if (handleToDate) {
      handleToDate(toValue);
    }

    if (handleFromDate) {
      handleFromDate(fromValue);
    }
  };

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
        max={dateToValue('2024-12-31')}
        value={[dateToValue(dates[0]), dateToValue(dates[1])]}
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

export default RangeSliderWithTooltip;
