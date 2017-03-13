function Bob() {
	this.hey = function(talk) {
		if (talk === [/s*/g] || talk === '') {
			return "Fine. Be that way!";
		} 

		if (talk === talk.toUpperCase()){
			return 'Whoa, chill out!';
		}

		if (talk[talk.length -1] === '?') {
			return 'Sure.';
		}

		return 'Whatever.';
	}
}

module.exports = Bob;