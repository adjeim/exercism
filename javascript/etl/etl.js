function ETL() {
	this.transform = (old) => {

		let score;
		let letter;
		let transformed = {};

		for (let key in old) {
				// console.log(key); // the key 
				score = parseInt(key);

				for (let item in old[key]) {
					// console.log(old[key]); // the value
					let letter = old[key][item].toLowerCase();
					transformed[letter] = score
					// console.log(transformed);
				};
		};

		return transformed;
	};

} 

module.exports = ETL;