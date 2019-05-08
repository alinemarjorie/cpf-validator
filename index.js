const validationDigit = (cpf, digit) => {
	const add = cpf.slice(0, digit)
		.map((number, index) => parseInt(number) * (digit + 1 - index))
		.reduce((add, number) => add + number);

	let rev = 11 - add % 11;
	rev = rev == 10 || rev == 11 ? 0 : rev;

	return !(rev != parseInt(cpf[digit]));
};

module.exports.cpfValidator = cpfString => {
	cpfString = cpfString.replace(/[^\d]+/g, '');

	if (cpfString == '' || cpfString.length != 11) {
		return false;
	}

	const cpfArray = cpfString.split('');

	if (cpfArray.every((num) => num === cpfArray[0])) {
		return false;
	}

	return validationDigit(cpfArray, 9) && validationDigit(cpfArray, 10);
};