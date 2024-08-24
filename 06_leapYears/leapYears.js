const leapYears = function(year) {
    // Check for leap year conditions
    if (year % 400 === 0) {
        return true; // Leap year
    } else if (year % 100 === 0) {
        return false; // Not a leap year
    } else if (year % 4 === 0) {
        return true; // Leap year
    } else {
        return false; // Not a leap year
    }
};

console.log(leapYears(700));

// Do not edit below this line
module.exports = leapYears;
