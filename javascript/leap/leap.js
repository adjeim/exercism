function Year (year) {
	this.year = year;

  this.isLeap = function() {
    if (this.year % 400 === 0) {
      return true;
    } else if (this.year % 100 === 0) {
      return false;
    } else if (this.year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  };
}

module.exports = Year;
