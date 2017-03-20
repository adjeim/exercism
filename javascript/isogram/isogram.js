function Isogram(word) {

	this.isIsogram = function() {
		var letterArray = word.toLowerCase().split('');

		var letterCounts = {};

		for (var i = 0; i < letterArray.length; i ++) {
			var letter = letterArray[i];
			if (letterCounts.hasOwnProperty(letterArray[i])) {
				letterCounts[letter] += 1;
			} else {
				letterCounts[letter] = 1;
			}
		}

		for (var prop in letterCounts) {
		  if (letterCounts[prop] > 1) {
		  	return false;
		  } else {
		  	return true;
		  }
		}
	};

}

module.exports = Isogram;