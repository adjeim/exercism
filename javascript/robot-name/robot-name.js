function Robot() {

	this.usedNames = [];
	
	this.generateName = function() {
		var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var numbers = '0123456789';
		var name = '';

		for (var i = 0; i < 2; i++) {
			name += letters.charAt(Math.floor(Math.random() *  26))
		}

		for (var i = 0; i < 3; i++) {
			name += numbers.charAt(Math.floor(Math.random() *  10))
		}

		if (this.usedNames.indexOf(name) > -1) {
			return this.generateName();
		} else {
				this.usedNames.push(name);
				return name;
		}
	};

	this.name = this.generateName();

	this.reset = function() {
		this.name = this.generateName()

	}



}

module.exports = Robot;