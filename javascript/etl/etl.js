function ETL() {
	this.transform = (old) => {

		let score;
		let letter;

		for (var key in old) {
				// console.log(key); // the key 
				score = parseInt(key);
				
		    var value = old[key][0];
		    // console.log(value); // the value
		    letter = value.toLowerCase();
		};

		// console.log(score);
		// console.log(letter);

		let transformed = {};
		transformed[letter] = score;

		return transformed;
	};

} 

module.exports = ETL;