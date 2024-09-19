import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export const getFormatedDateTime = (date, format = 'MMM D, YYYY hh:mm A') => {
	return date && dayjs(date).format(format);
};

export const getTimeFromNow = date => {
	dayjs.extend(relativeTime);
	return dayjs(date).fromNow();
};

export const getCurrentMonthDate = (date, format = 'MMM DD,YYYY') => {
	if (date) return dayjs().date(date).format(format);

	return dayjs().format(format);
};
