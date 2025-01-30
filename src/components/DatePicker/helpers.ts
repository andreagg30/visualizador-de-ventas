import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
import _ from 'lodash';
import { FechasDisponiblesTypes } from '.';
export const getWeekDays = () => {
	const helper: string[] = [];
	moment.weekdays().forEach((element) => {
		helper.push(element.substring(0, 3));
	});
	return helper;
};
export const createCol = (cont: number, month: string, year: string) => {
	const firstDayInMonthIndex = (
		monthIndex: string,
		years: string,
	) => (
		moment(`${years}-${monthIndex}-01`).startOf('month').day()
	);
	const daysOfMonth = (monthIndex: string, yearIndex: string) => moment(`${yearIndex}-${monthIndex}`, 'YYYY-MM').daysInMonth();
	const finalDay = daysOfMonth(month, year);
	const table: (number|string)[] = [];
	const firstDay = firstDayInMonthIndex(month, year) * -1;
	if (cont > 1) {
		for (let item = firstDay; item <= 7; item += 1) {
			if (cont === 2 && item >= 1) {
				table.push(item + 7 + firstDay);
			} else if (cont > 1 && item >= 1) {
				if ((item + (7 * (cont - 1))) <= finalDay - firstDay) {
					table.push((item + firstDay) + (7 * (cont - 1)));
				} else {
					table.push(' ');
				}
			} else if (item >= 1) {
				table.push(item);
			}
		}
	} else {
		for (let item = firstDay; item <= 7 + firstDay; item += 1) {
			if (item < 0 || item > 0) {
				table.push(item);
			}
		}
	}
	return table;
};

export const createRow = (month: string, year: string) => {
	const firstDayInMonthIndex = (
		monthIndex: string,
		years: string,
	) => (
		moment(`${years}-${monthIndex}-01`).startOf('month').day()
	);
	const daysOfMonth = (monthIndex: string, yearIndex: string) => moment(`${yearIndex}-${monthIndex}`, 'YYYY-MM').daysInMonth();
	const table = [];

	if (daysOfMonth(month, year) >= 30 && firstDayInMonthIndex(month, year) >= 5) {
		for (let ite = 1; ite <= 6; ite += 1) {
			table.push(ite);
		}
	} else {
		for (let ite = 1; ite <= 5; ite += 1) {
			table.push(ite);
		}
		return table;
	}

	return table;
};
export const eventos = (eventsArray: string, day: string, month: string, year: string) => {
	let answer;
	if (moment(`${year}-${month}-${day}`).format('LL') === moment(`${eventsArray}`).format('LL')) {
		answer = true;
	} else {
		answer = false;
	}
	return answer;
};

export const today = (day: string, month: string, year: string) => {
	let answer;
	if (moment(`${year}-${month}-${day}`).format('LL') === moment().format('LL')) {
		answer = true;
	} else {
		answer = false;
	}
	return answer;
};

export const getIsBefore = (dateValue: string, 	nRangoLibreFechasDisponibles?: boolean,
	dFechasAPartirDe?: string,
	dFechasDisponibles?: FechasDisponiblesTypes[]) => {

	return (moment(dateValue).isBefore(moment(dFechasAPartirDe)) && (nRangoLibreFechasDisponibles === false || dateValue !== moment().format('YYYY-MM-DD'))) || ((dFechasDisponibles?.length || 0) > 0 && !(_.find(dFechasDisponibles, (o: FechasDisponiblesTypes)=>o.dFecha === moment(dateValue).format('YYYY-MM-DD'))));
};