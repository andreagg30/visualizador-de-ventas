/* eslint-disable @typescript-eslint/no-explicit-any */
// @flow
import React from 'react';
import moment from 'moment';
import useDatePicker from './hooks';
import 'moment/locale/es';
import { createCol, createRow, getWeekDays } from './helpers';
import { ChevronLeft, ChevronRight } from '@/icons';
import IconButton from '../IconButton';
import Button from '../Button';

export type FechasDisponiblesTypes = {
    dFecha: string,
};


type Props = {
  handleCLick: (value: string) => void;
  dFechasAPartirDe?: string;
  dFechasDisponibles?: FechasDisponiblesTypes[];
  handleToday?: () => void;
};

export default function DatePicker({
  handleCLick,
  dFechasAPartirDe,
  dFechasDisponibles,
  handleToday,
}: Props)  {
  const { currentMonth, selectedYear, handleNext, handleBack } = useDatePicker(
    dFechasAPartirDe,
    dFechasDisponibles
  );
  const WeekDays = getWeekDays();
  const handleMes = (mes: string) => {
    return moment(mes).format('MMMM');
  };
  return (
    <div className="min-h-[302px] min-w-60 rounded-lg border bg-white p-2.5 shadow-[0px_2px_5px_-1px_rgba(50,50,93,0.25),0px_1px_3px_-1px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-between">
        <IconButton onClick={handleBack}>
          <ChevronLeft className="h-[18px] w-[18px]" />
        </IconButton>
        <div className="flex flex-1 items-center justify-center text-center">
          <span className="font-bold capitalize">
            {`${handleMes(currentMonth)} ${selectedYear}`}
          </span>
        </div>

        <IconButton onClick={handleNext}>
          <ChevronRight className="h-[18px] w-[18px]" />
        </IconButton>
      </div>
      <div className='flex flex-col'>
        <div className="mb-1 mt-4 flex items-center justify-between gap-1">
          {WeekDays.map((day) => (
            <div className='flex-1 flex justify-center' key={`día${day}`}>
              <span className='uppercase text-black text-xs'  >
                {day}
              </span>
            </div>
          ))}
        </div>
        <>
          {createRow(currentMonth, selectedYear).map((item) => (
            <div
			className='flex justify-between gap-1 relative'
              key={`RowList${item}`}
            >
              {createCol(item, currentMonth, selectedYear).map(
                (itemCol: any) => {
                  const itemDate = moment(
                    `${selectedYear}-${
                      currentMonth
                    }-${itemCol < 10 ? `0${itemCol}` : itemCol}`
                  ).format('YYYY-MM-DD');
                 /*  const isBefore = getIsBefore(
                    itemDate,
                    nRangoLibreFechasDisponibles,
                    dFechasAPartirDe,
                    dFechasDisponibles
                  ); */
                  return (
                    <div className='flex flex-col items-center justify-center flex-nowrap flex-1 min-h-9' key={`ColList${itemCol}${Math.random()}`}>
                      {itemCol < 0 || itemCol === ' ' ? (
                        <button className='bg-transparent w-full h-full max-w-[42px] border-none' disabled> </button>
                      ) : (
                        <button
                          /* disabled={isBefore} */
                          onClick={() => {
                            handleCLick(itemDate);
                          }}
						  className='bg-transparent w-full h-full max-w-[42px] border-none disabled:text-disabled-font-50 cursor-pointer disabled:cursor-auto'
                        >
                          {itemCol}
                        </button>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          ))}
        </>
      </div>
      <div className='flex justify-center'>
      <Button className='text-xs font-bold min-w-28' onClick={handleToday}>Hoy</Button>
      </div>
    </div>
  );
};

