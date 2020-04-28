exports.isChristmas = function() {
	let date = new Date();  
	let month = date.getMonth();
	let day = date.getDate();
	if (month == 11 && day == 25) return true; // Eleven because computers start counting @ 0
	return false;
}