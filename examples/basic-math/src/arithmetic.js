export const add = (a, b) => {
	if (typeof a === 'string') a = Number(a);
	if (typeof b === 'string') b = Number(b);
	if (isNaN(a) || isNaN(b)) throw new Error('One of the inputs is not a number');
	return a + b;
};

export const subtract = (a, b) => {
	if (Array.isArray(a)) {
		a = a.reduce((a, b) => a - b);
	}
	if (Array.isArray(b)) {
		b = b.reduce((a, b) => a - b);
	}
	return a - b;
};

export const multiply = (a, b) => {
	return a * b;
};

export const divide = (a, b) => {
	return a / b;
};
