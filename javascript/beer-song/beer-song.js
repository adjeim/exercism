function BeerSong() {

	this.verse = function(number) {

		var manyBottles = number + ' bottles of beer on the wall, ' + number + ' bottles of beer.\nTake one down and pass it around, ';

		var oneLess = (number - 1) + ' bottles of beer on the wall.\n';

		var oneBottleLeft = '1 bottle of beer on the wall.\n';

		var oneBottle = '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';

		var noBottles = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';

		var lyrics = '';


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

		return lyrics;
	};

	this.sing = function(start, end) {
		var lyrics = '';
		var verses = start - end;
		console.log(verses);
		for (var i = 0; i <= verses; i++) {
			var number = start;
			console.log(start);
			lyrics += this.verse(start);
			lyrics += '\n';
			start--;
		}

		return lyrics.substr(0, (lyrics.length-1));

		// var verses = start - end;
		// console.log(verses);

		// var manyBottles = number + ' bottles of beer on the wall, ' + number + ' bottles of beer.\nTake one down and pass it around, ';

		// var oneLess = (number - 1) + ' bottles of beer on the wall.\n';

		// var oneBottleLeft = '1 bottle of beer on the wall.\n';

		// var oneBottle = '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';

		// var noBottles = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';

		// var lyrics = '';

		// for (var i = 0; i <= verses; i++) {
		// 	var number = start;
		// 	console.log(start);

		// 	var manyBottles = number + ' bottles of beer on the wall, ' + number + ' bottles of beer.\nTake one down and pass it around, ';

		// 	var oneLess = (number - 1) + ' bottles of beer on the wall.\n';

		// 	var oneBottleLeft = '1 bottle of beer on the wall.\n';

		// 	var oneBottle = '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';

		// 	var noBottles = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';

		// 	if (start > 2) {
		// 		lyrics += manyBottles;
		// 		lyrics += oneLess;
		// 	} else if (number === 2) {
		// 		lyrics += manyBottles;
		// 		lyrics += oneBottleLeft;
		// 	} else if (number === 1) {
		// 		lyrics += oneBottle;
		// 	} else if (number === 0) {
		// 		lyrics += noBottles;
		// 	};

		// 	lyrics += '\n';

		// 	start--;
			
		// }

		// return lyrics.substr(0, (lyrics.length-1));

	}

}

module.exports = BeerSong;