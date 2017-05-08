function School() {
	this.rosterContents = {};

	this.roster = function() {
		
		return this.rosterContents;
	};

	this.add = function(student, grade) {
		if (this.rosterContents[grade]) {
			this.rosterContents[grade].push(student);
			console.log(this.rosterContents);
		} else {
			this.rosterContents[grade] = [student];
			console.log(this.rosterContents);
		};
		
	};

}

module.exports = School;