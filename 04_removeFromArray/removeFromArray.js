const array = [[1, 2, 3, 4], 7, "tacos"];

const removeFromArray = function(value) {
  if (Array.isArray(value)) {
    // Remove 3 from any nested array
    return value.filter(v => v!==7 && v!=="tacos");
  }
  return value !==7 && value !=="tacos";
};

const x = array.map(removeFromArray).filter(value => value.length !== 0);

console.log(`myArray values: ${JSON.stringify(x)}`);


// Do not edit below this line
module.exports = removeFromArray;
