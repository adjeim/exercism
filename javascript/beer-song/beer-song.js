function BeerSong() {

	this.verse = function(number) {
		return (number + ' bottles of beer on the wall, ' + number + ' bottles of beer.\nTake one down and pass it around, ' + (number - 1) + ' bottles of beer on the wall.\n');
	};

}

module.exports = BeerSong;