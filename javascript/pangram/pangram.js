function Pangram(string) {
	this.string = string.toLowerCase();

	this.isPangram = function() {
		var alphabetChars = ('abcdefghijklmnopqrstuvwxyz').split('');

		for (var i = 0; i < alphabetChars.length; i ++) {
			if (this.string.indexOf(alphabetChars[i]) === -1) {
				console.log(alphabetChars[i] + " was not found");
				return false;
			}
		} 
			console.log("all letters were found");
			return true;
	};
}

module.exports = Pangram;