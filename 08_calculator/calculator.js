const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(arrayNum) {
  const sumOfarray = arrayNum.reduce((total, currentItem) => 
    {
    return total + currentItem;
  }, 0)
  return sumOfarray;
};


const multiply = function(arrayNum2) {
  const multOfArray = arrayNum2.reduce((total, currentItem) => 
    {
    return total * currentItem;
  });
  return multOfArray;
};

const power = function(a,b) {
  const powOfArray = Math.pow(a, b);

  return powOfArray;
};

const factorial = function(n) {
	let result = 1;

  for(let i = n; i>0; i--){
    result *=i;
  }

  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
