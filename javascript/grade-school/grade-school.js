function School() {
	this.rosterContents = {};

	this.roster = function() {
		return this.rosterContents;
	};

	this.add = function(student, grade) {
		if (this.rosterContents[grade]) {
			this.rosterContents[grade].push(student);
			this.rosterContents[grade].sort();
		} else {
			this.rosterContents[grade] = [student];
		};		
	};

	this.grade = function(num) {
		var selectedStudents = this.rosterContents[num];
		if (selectedStudents) {
			return selectedStudents;
		} else {
			return [];
		};
	};

}

module.exports = School;