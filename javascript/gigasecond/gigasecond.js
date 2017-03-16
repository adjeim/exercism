function Gigasecond(input) {
	this.date = function() {
		var currentMilliseconds =  Date.parse(input);
		var giga = 1000000000000;
		var plusGiga = currentMilliseconds + giga;
		var getDate = new Date(plusGiga);

		return getDate;
	};
}

module.exports = Gigasecond;