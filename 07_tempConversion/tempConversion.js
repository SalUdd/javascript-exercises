const convertToCelsius = function(celNum) {

  let celTemp = (celNum -32 ) * (5/9);
  let roundedCelTemp = celTemp.toFixed(1);
  return +roundedCelTemp;
};

const convertToFahrenheit = function(fahrNum) {
  let fahrTemp = (fahrNum * (9/5) + 32 ); 
  let roundedFahrTemp = fahrTemp.toFixed(1);
  return +roundedFahrTemp;
};

console.log(convertToCelsius(-100));
console.log(convertToFahrenheit(-10));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
