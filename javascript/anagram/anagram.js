function Anagram(word) {
	this.matches = function(compareWords) {
		var isAnagram = [];

		if (!Array.isArray(compareWords)) {
			var tempArray = [];
			for (var a = 0; a < arguments.length; a ++) {
				tempArray.push(arguments[a]);
			}
			compareWords = tempArray;
		}

		for (var i = 0; i < compareWords.length; i ++) {
			var originalWord = word.toLowerCase();
			console.log("the original word is " + originalWord);

			var comparisonWord = compareWords[i].toLowerCase();
			console.log("the word to compare is " + comparisonWord);


			if (comparisonWord.length === originalWord.length && comparisonWord !== originalWord) {

				for (var k = 0; k < originalWord.length; k ++) {
					
					if (comparisonWord.indexOf(originalWord[k]) > -1 ) {
						comparisonWord = comparisonWord.replace(originalWord[k], '');
						console.log(comparisonWord);
					}
				}
				console.log(originalWord);
				console.log(comparisonWord);
				if (comparisonWord === '') {
					isAnagram.push(compareWords[i]);
				}
			}
		}
		return isAnagram;
	}
	
}

module.exports = Anagram;