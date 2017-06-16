function ETL() {
	this.transform = (old) => {

		let score;
		let letter;
		let transformed = {};

		for (let key in old) {
				score = parseInt(key);

				for (let item in old[key]) {
					let letter = old[key][item].toLowerCase();
					transformed[letter] = score;
				}
		}

		return transformed;
	};

} 

module.exports = ETL;