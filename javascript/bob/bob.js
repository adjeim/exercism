function Bob() {

	this.hey = function(talk){

		var response = 'Whatever.';
		var isSilence = !talk.match(/\S/);
		var isShouting = talk === talk.toUpperCase() && !isSilence;
		var isQuestion = talk.charAt(talk.length -1) === '?';
		var isNumbers = talk.match(/\d+/);
		var hasExclamation = talk.charAt(talk.length -1) === '!';

		if (isSilence) {
			response = 'Fine. Be that way!';
		}

		if (isQuestion) {
			response = 'Sure.';
		}

		if (isShouting && !isNumbers) {
			response = 'Whoa, chill out!';
		}

		if (isNumbers) {
			if (hasExclamation) {
				response = 'Whoa, chill out!';
			} else if (isQuestion) {
				response = 'Sure.';
			} else {
				response = 'Whatever.';
			}
		}

		return response;

  };
}

module.exports = Bob;