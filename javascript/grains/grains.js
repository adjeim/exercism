function Grains() {
	var BigInt = require('./big-integer');

	this.square = (number) => {
		// return (Math.pow(2, number) / 2) .toString();
		let bigI = BigInt(number);
		let big2 = BigInt(2);
		return (big2.pow(bigI).divide(2)).toString();

	};

}

module.exports = Grains;