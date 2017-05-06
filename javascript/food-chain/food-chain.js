function FoodChain() {
    this.animals = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'];

    this.animalComments = {
        'fly': 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n',
        'spider': 'It wriggled and jiggled and tickled inside her.',
        'bird': 'How absurd to swallow a bird!',
        'cat': 'Imagine that, to swallow a cat!',
        'dog': 'What a hog, to swallow a dog!',
        'goat': 'Just opened her throat and swallowed a goat!',
        'cow': 'I don\'t know how she swallowed a cow!',
        'horse': 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n'
    };

    this.line = function(num) {
   		if (num == 2) {
        // when it's 'bird'
        return 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.';
    	}
    	// any other animal
    	return 'She swallowed the ' + this.animals[num] +
        ' to catch the ' + this.animals[num - 1] + '.';
    };

    this.verse = function(num) {
    	var food = this.animals[num - 1];

	    if (food === 'horse') {
	        return this.animalComments[food];
	    }

	    var lyrics = [];

	    lyrics.push('I know an old lady who swallowed a ' + food + '.');
	    lyrics.push(this.animalComments[food]);

	    for (var i = (num - 1); i > 0; i--) {
	        lyrics.push(this.line(i));
	    }

	    // song ends with fly comment
	    if (num !== 1) {
	        lyrics.push(this.animalComments.fly);
	    }
	    return lyrics.join('\n');
    };

    this.verses = function(start, end) {
    	var lyrics = [];
	    for (var i = start; i <= end; i++) {
        lyrics.push(this.verse(i));
	    }
	    return lyrics.join('\n') + '\n';

    };
}

module.exports = FoodChain;