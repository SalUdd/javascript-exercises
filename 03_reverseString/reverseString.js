const reverseString = function() {
let original = "hello";
let reversed = original.split('').reverse().join('');
return reversed;
};
console.log(reverseString());

// Do not edit below this line
module.exports = reverseString;
