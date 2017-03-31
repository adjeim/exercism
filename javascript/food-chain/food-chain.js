function FoodChain() {
	var animals = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'];

	var comments = {
		fly: 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.',
		spider: 'It wriggled and jiggled and tickled inside her.',
		bird: 'How absurd to swallow a bird!',
		cat: 'Imagine that, to swallow a cat!',
		dog: 'What a hog, to swallow a dog!',
		goat: 'Just opened her throat and swallowed a goat!',
		cow: 'I don\'t know how she swallowed a cow!',
		horse: 'She\'s dead, of course!'
	};

	var firstLine = 'I know an old lady who swallowed a ';

	var spiderLine = 'She swallowed the spider to catch the fly.\n'

	this.verse = function(num) {
		var lyrics = '';
		// console.log(num);
		for (var i = 0; i < num; i ++){
			if (num === 1) {
				console.log(num);
				lyrics += firstLine + animals[num - 1] + '.\n' + comments[animals[num - 1]] + '\n';
				num --;
			} else {
				console.log(num);
				lyrics += firstLine + animals[num - 1] + '.\n' + comments[animals[num - 1]] + '\n' + spiderLine + comments.fly;
					num --;
			};
		}
		return lyrics;
	};

}

module.exports = FoodChain;