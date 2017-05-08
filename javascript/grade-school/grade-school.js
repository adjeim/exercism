function School() {
	this.rosterContents = {};

	this.roster = function() {
		
		return this.rosterContents;
	};

	this.add = function(student, grade) {
		this.rosterContents[grade] = [student];
	};

}

module.exports = School;