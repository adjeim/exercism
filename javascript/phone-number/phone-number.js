function PhoneNumber(string) {
	this.number = function() {
		var newString = string.replace(/\D/g, '');
		if (newString.length === 10) {
			return newString;
		} else if (newString.length === 11 && newString[0] === '1') {
			return newString.substr(1, 11)
		} else {
			return '0000000000';
		}
	};

	this.areaCode = function() {
		var number = this.number();
		var code = number.substr(0, 3);

		return code;

	};

}

module.exports = PhoneNumber;