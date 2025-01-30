import {useEffect, useState} from 'react';
import moment from 'moment';
import 'moment/locale/es';
import { FechasDisponiblesTypes } from '~/interfaces';

const useDatePicker = (dFechasAPartirDe?: string, dFechasDisponibles?: FechasDisponiblesTypes[]) =>{
	const [currentMonth, setCurrentMonth] = useState(moment().format('MM'));
	const [selectedYear, setSelectedYear] = useState(moment().format('YYYY'));

	useEffect(() => {
		if(dFechasAPartirDe){
			setCurrentMonth(moment(dFechasAPartirDe).format('MM'));
			setSelectedYear(moment(dFechasAPartirDe).format('YYYY'));
		}
		if(dFechasDisponibles && dFechasDisponibles[0]?.dFecha){
			setCurrentMonth(moment(dFechasDisponibles[0]?.dFecha).format('MM'));
			setSelectedYear(moment(dFechasDisponibles[0]?.dFecha).format('YYYY'));
		}

	}, [dFechasDisponibles]);
	
	const handleNext = () => {
		if (moment(`${selectedYear}-${currentMonth}`).format('MM') === moment('12').format('MM')) {
			setSelectedYear(moment(`${selectedYear}-${currentMonth}`).add(1, 'year').format('YYYY'));
			setCurrentMonth(moment(`${selectedYear}-${currentMonth}`).add(1, 'month').format('MM'));
		} else {
			setCurrentMonth(moment(`${selectedYear}-${currentMonth}`).add(1, 'month').format('MM'));
		}
	};

	const handleBack = () => {
		if (moment(`${selectedYear}-${currentMonth}`).format('MM') === moment('0').format('MM')) {
			setSelectedYear(moment(`${selectedYear}-${currentMonth}`).subtract(1, 'year').format('YYYY'));
			setCurrentMonth(moment(`${selectedYear}-${currentMonth}`).subtract(1, 'month').format('MM'));
		} else {
			setCurrentMonth(moment(`${selectedYear}-${currentMonth}`).subtract(1, 'month').format('MM'));
		}
	};
	return {
		currentMonth,
		selectedYear,
		handleNext,
		handleBack,
	};
};
export default useDatePicker;
