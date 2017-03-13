function Hamming () {

	this.compute = function(dna1, dna2) {
		if (dna1.length !== dna2.length) {
			throw new Error("DNA strands must be of equal length.");
		} else {

			var difference = 0;

			for (var i = 0; i < dna1.length; i++) {
				if (dna1.charAt(i) !== dna2.charAt(i)) {
					difference += 1;
				}
			}

			return difference;
		}

	};
}

module.exports = Hamming;
