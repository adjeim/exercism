function School() {
	this.roster = function() {
		return {};
	};

	this.add = function(student, grade) {
		roster[grade] = [student];
	};

}

module.exports = School;