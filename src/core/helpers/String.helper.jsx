export function getLastPathSegment(url) {
	const segments = url.split('/');
	return segments.pop() || segments.pop();
}

export function generateUniqueNumberString(length) {
	const digits = '0123456789';
	let uniqueNumber = '';
	const generatedNumbers = new Set();

	while (uniqueNumber.length < length) {
		const digit = digits[Math.floor(Math.random() * 10)];
		uniqueNumber += digit;

		if (uniqueNumber.length === length) {
			if (!generatedNumbers.has(uniqueNumber)) {
				generatedNumbers.add(uniqueNumber);
			} else {
				uniqueNumber = '';
			}
		}
	}

	return uniqueNumber;
}
