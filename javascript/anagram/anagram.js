function Anagram(word) {
	this.matches = function(array) {
		var isAnagram = [];


		// var originalWord = word;

		for (var i = 0; i < array.length; i ++) {
			var originalWord = word.toLowerCase();
			console.log("the original word is " + originalWord);

			var comparisonWord = array[i].toLowerCase();
			console.log("the word to compare is " + comparisonWord);


			if (comparisonWord.length === originalWord.length && comparisonWord !== originalWord) {

				for (var k = 0; k < originalWord.length; k ++) {
					// console.log(comparisonWord.length);

					if (comparisonWord.indexOf(originalWord[k]) > -1 ) {
						// remove the letter from original word
						comparisonWord = comparisonWord.replace(originalWord[k], '');
						console.log(comparisonWord);

					}
					// console.log(originalWord);
					// if (originalWord.length === 0) {
					// 	isAnagram.push(comparisonWord);
					// }

				}
				console.log(originalWord);
				console.log(comparisonWord);
				if (comparisonWord === '') {
					isAnagram.push(array[i]);
				}
				// console.log(originalWord)
				console.log(isAnagram);
				// return isAnagram;

			}
		}

		// console.log(array);
		return isAnagram;


	}
	
}

module.exports = Anagram;