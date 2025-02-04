import React, { useState, useEffect } from 'react';
import moment, { Moment } from 'moment';
import './styles.css'
import Tooltip from '../Tooltip';

const RangeSlider: React.FC = () => {
  // Definimos las fechas de inicio y fin, y su rango
  const initialFromDate = moment().startOf('day');
  const initialToDate = moment().add(1, 'days').startOf('day');

  const [fromDate, setFromDate] = useState<Moment>(initialFromDate);
  const [toDate, setToDate] = useState<Moment>(initialToDate);

  // Definir las fechas límite (mínima y máxima)
  const minDate = moment().subtract(1, 'year');
  const maxDate = moment().add(1, 'year');

  // Función para convertir las fechas a milisegundos
  const dateToMilliseconds = (date: Moment): number => date.valueOf();
  const millisecondsToDate = (milliseconds: number): Moment => moment(milliseconds);

  // Actualizar el valor del slider para la fecha de inicio
  const handleFromSliderChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value, 10);
    const newFromDate = millisecondsToDate(value);
    if (newFromDate.isAfter(toDate)) {
      setFromDate(toDate);
    } else {
      setFromDate(newFromDate);
    }
  };

  // Actualizar el valor del slider para la fecha de fin
  const handleToSliderChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value, 10);
    const newToDate = millisecondsToDate(value);
    if (newToDate.isBefore(fromDate)) {
      setToDate(fromDate);
    } else {
      setToDate(newToDate);
    }
  };

  // Actualizar el valor de la fecha de inicio desde el input
  const handleFromInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newFromDate = moment(e.target.value);
    if (newFromDate.isAfter(toDate)) {
      setFromDate(toDate);
    } else {
      setFromDate(newFromDate);
    }
  };

  // Actualizar el valor de la fecha de fin desde el input
  const handleToInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newToDate = moment(e.target.value);
    if (newToDate.isBefore(fromDate)) {
      setToDate(fromDate);
    } else {
      setToDate(newToDate);
    }
  };

  // Función para obtener el fondo del slider
  const fillSlider = (): string => {
    const rangeDistance = dateToMilliseconds(maxDate) - dateToMilliseconds(minDate);
    const fromPosition = dateToMilliseconds(fromDate) - dateToMilliseconds(minDate);
    const toPosition = dateToMilliseconds(toDate) - dateToMilliseconds(minDate);

    console.log(fromPosition, 'fromPositionfromPosition');
    

    return `linear-gradient(
      to right,
      #C6C6C6 0%,
      #C6C6C6 ${(fromPosition / rangeDistance) * 100}%,
      #212121 ${(fromPosition / rangeDistance) * 100}%,
      #212121 ${(toPosition / rangeDistance) * 100}%,
      #C6C6C6 ${(toPosition / rangeDistance) * 100}%,
      #C6C6C6 100%)`;
  };

  useEffect(() => {
    // Ajustar la visibilidad del slider derecho cuando el valor de "to" sea menor o igual a 0
    const toSlider = document.querySelector('#toSlider') as HTMLInputElement;
    if (toDate.isBefore(minDate)) {
      toSlider.style.zIndex = '2';
    } else {
      toSlider.style.zIndex = '0';
    }
  }, [toDate]);
  console.log(dateToMilliseconds(toDate) , 'dateToMilliseconds(toDate)');
  

  return (
    <div className="range_container">
      <div className="sliders_control">
        <input
          id="fromSlider"
          className='h-0 z-10'
          type="range"
          value={dateToMilliseconds(fromDate)}
          min={dateToMilliseconds(minDate)}
          max={dateToMilliseconds(maxDate)}
          onChange={handleFromSliderChange}
          style={{ background: fillSlider() }}
        />
        <Tooltip placement='bottom-end' description='jnkjnk' >
        <input
          id="toSlider"
          type="range"
          value={dateToMilliseconds(toDate)}
          min={dateToMilliseconds(minDate)}
          max={dateToMilliseconds(maxDate)}
          onChange={handleToSliderChange}
          style={{ background: fillSlider() }}
        />
        </Tooltip>
       
      </div>
      <div className="form_control">
        <div className="form_control_container">
          <div className="form_control_container__time">Min</div>
          <input
            className="form_control_container__time__input"
            type="date"
            id="fromInput"
            value={fromDate.format('YYYY-MM-DD')}
            onChange={handleFromInputChange}
          />
        </div>
        <div className="form_control_container">
          <div className="form_control_container__time">Max</div>
          <input
            className="form_control_container__time__input"
            type="date"
            id="toInput"
            value={toDate.format('YYYY-MM-DD')}
            onChange={handleToInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
