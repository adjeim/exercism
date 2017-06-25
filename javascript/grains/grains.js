function Grains() {
	var BigInt = require('./big-integer');

	this.square = (number) => {
		// return (Math.pow(2, number) / 2) .toString();
		let bigI = BigInt(number);
		let big2 = BigInt(2);
		return (big2.pow(bigI).divide(2)).toString();

	};

	this.total = () => {
		let totalGrains = BigInt(0);

		for (let i = 0; i < 65; i ++) {
			totalGrains = totalGrains.add(BigInt(this.square(i)));
		};
		
		return totalGrains.toString();
	};

}

module.exports = Grains;