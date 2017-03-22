function BeerSong() {

	this.verse = function(number) {

		var plural = 'bottles';
		var singular = 'bottle';

		var oneOrMany;

		if (number === 2) {
			oneOrMany = 'bottle';
		} else {
			oneOrMany = 'bottles';
		}

		return (number + ' bottles of beer on the wall, ' + number + ' bottles of beer.\nTake one down and pass it around, ' + (number - 1) + ' ' + oneOrMany + ' of beer on the wall.\n');
	};

}

module.exports = BeerSong;