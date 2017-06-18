function SpaceAge(seconds) {
	this.seconds = seconds;

	// Time in seconds:
	const earthYear = 31557600;
	const mercuryYear = 0.2408467 * earthYear;
	const venusYear = 0.61519726 * earthYear;
	const marsYear = 1.8808158 * earthYear;
	const jupiterYear = 11.862615 * earthYear;
	const saturnYear = 29.447498 * earthYear;
	const uranusYear = 84.016846 * earthYear;
	const neptuneYear = 164.79132 * earthYear;

	this.onEarth = () => {
		return parseFloat((this.seconds / earthYear).toFixed(2));
	};

	this.onMercury = () => {
		return parseFloat((this.seconds / mercuryYear).toFixed(2));
	};
	
	this.onVenus = () => {
		return parseFloat((this.seconds / venusYear).toFixed(2));
	};
	
	this.onMars = () => {
		return parseFloat((this.seconds / marsYear).toFixed(2));
	};
	
	this.onJupiter = () => {
		return parseFloat((this.seconds / jupiterYear).toFixed(2));
	};
	
	this.onSaturn = () => {
		return parseFloat((this.seconds / saturnYear).toFixed(2));
	};
	
	this.onUranus = () => {
		return parseFloat((this.seconds / uranusYear).toFixed(2));
	};

	this.onNeptune = () => {
		return parseFloat((this.seconds / neptuneYear).toFixed(2));
	};
}

module.exports = SpaceAge;
