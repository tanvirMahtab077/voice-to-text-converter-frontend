import { ERROR, INFO, PRIMARY_COLOR, SECONDARY_COLOR, SUCCESS, WARNING } from '../constants/ThemeColor.constant';

export const isEmpty = obj => {
	for (let key in obj) {
		// eslint-disable-next-line no-prototype-builtins
		if (obj.hasOwnProperty(key)) {
			return false;
		}
	}
	return true;
};

export const getFileSize = bytes => {
	if (bytes === 0) return '0 Bytes';
	let k = 1024,
		dm = 2,
		sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
		i = Math.floor(Math.log(bytes) / Math.log(k));
	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export function capitalizeText(text, replaceingWith) {
	return text
		.split(replaceingWith)
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(replaceingWith);
}

export function replaceSpecialCharacter(text, replacingWith) {
	return typeof text === 'string' ? capitalizeText(text.replace(/[^a-zA-Z0-9]/g, replacingWith), replacingWith) : text;
}

export function formatAsDollar(amount, decimalPlaces = 0) {
	if (isNaN(amount) || !isFinite(amount)) {
		return '$0';
	}
	const roundedAmount = Math.round(amount * 100) / 100;
	const formattedAmount = roundedAmount.toFixed(decimalPlaces).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return `$${formattedAmount}`;
}

export const randomizeArray = data => {
	return data.map(() => {
		return Math.floor(Math.random() * 100);
	});
};

export const getChartColor = color => {
	if (color === 'primary') return PRIMARY_COLOR;
	else if (color === 'error') return ERROR;
	else if (color === 'success') return SUCCESS;
	else if (color === 'info') return INFO;
	else if (color === 'warning') return WARNING;
	else if (color === 'secondary') return SECONDARY_COLOR;
};

// export const getPaginationData = (request, data) => {
// 	const page = parseInt(request.queryParams.page || '1');
// 	const limit = parseInt(request.queryParams.limit || '5');

// 	const total = data.length;
// 	const totalPages = Math.ceil(total / limit);

// 	const start = (page - 1) * limit;
// 	const end = page * limit;
// 	console.log('start', start);
// 	console.log('end', end);

// 	// console.log(sortedData)
// 	// data.sort((a, b) => b.index - a.index);
// 	const sortedData = [...data].sort((a, b) => b.index - a.index);
// 	console.log('sorted data', data);
// 	const paginatedData = sortedData.slice(start, end);
// 	console.log('paginated data', paginatedData);
// 	return {
// 		page,
// 		limit,
// 		paginatedData,
// 		total,
// 		totalPages,
// 	};
// };
export const getPaginationData = (request, data) => {
	const page = parseInt(request.queryParams.page || '1', 10);
	const limit = parseInt(request.queryParams.limit || '5', 10);

	// Ensure page and limit are valid
	if (isNaN(page) || page < 1) {
		throw new Error('Invalid page number');
	}
	if (isNaN(limit) || limit < 1) {
		throw new Error('Invalid limit');
	}

	const total = data.length;
	const totalPages = Math.ceil(total / limit);

	// Sort data by `index` in descending order
	const sortedData = [...data].sort((a, b) => b.index - a.index);

	// Calculate the start and end indices
	const start = (page - 1) * limit;
	const end = Math.min(start + limit, total);

	// Validate start and end indices
	if (start > total || start < 0) {
		throw new Error('Start index out of bounds');
	}
	if (end > total || end < start) {
		throw new Error('End index out of bounds');
	}
	// Slice the sorted data
	const paginatedData = sortedData.slice(start, end);

	return {
		page,
		limit,
		paginatedData,
		total,
		totalPages,
	};
};

export const getByKey = (data, val, key) => {
	const label = data?.find(el => el[key] == val);
	return label;
};
