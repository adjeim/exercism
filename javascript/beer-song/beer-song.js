function BeerSong() {

	this.verse = function(number) {

		// for (var i = 0; i <)

		var manyBottles = number + ' bottles of beer on the wall, ' + number + ' bottles of beer.\nTake one down and pass it around, ';

		// var takeOne;

		var oneLess = (number - 1) + ' bottles of beer on the wall.\n';

		var oneBottleLeft = '1 bottle of beer on the wall.\n';

		var oneBottle = '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';

		var noBottles = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';

		var lyrics = '';

		// var oneOrMany;

		// if (number === 2) {
		// 	oneOrMany = 'bottle';
		// } else {
		// 	oneOrMany = 'bottles';
		// }

		if (number > 2) {
			lyrics += manyBottles;
			lyrics += oneLess;
		} else if (number === 2) {
			lyrics += manyBottles;
			lyrics += oneBottleLeft;
		} else if (number === 1) {
			lyrics += oneBottle;
		} else if (number === 0) {
			lyrics += noBottles;
		}

		// return (number + ' bottles of beer on the wall, ' + number + ' bottles of beer.\nTake one down and pass it around, ' + (number - 1) + ' ' + oneOrMany + ' of beer on the wall.\n');
		return lyrics;
	};

}

module.exports = BeerSong;