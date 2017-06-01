function Robot() {

	
	this.generateName = function() {
		var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var numbers = '0123456789';
		var name = '';

		name += letters.charAt(Math.floor(Math.random() *  26))
		name += letters.charAt(Math.floor(Math.random() *  26))
		name += numbers.charAt(Math.floor(Math.random() *  10))
		name += numbers.charAt(Math.floor(Math.random() *  10))
		name += numbers.charAt(Math.floor(Math.random() *  10))

		return name;

	};

	this.name = this.generateName();

	this.reset = function() {
		this.name = this.generateName()

	}

}

module.exports = Robot;