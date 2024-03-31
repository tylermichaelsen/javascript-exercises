const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArray) {
  let finalResult = 0;
	numArray.forEach(addAll);

  function addAll(item) {
    finalResult += item;
  }
  return finalResult;
};

const multiply = function(numArray) {
  finalResult = 1;
  for(let i = 0; i < numArray.length; i++) {
    finalResult *= numArray[i];
  }
  return finalResult;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(number) {
  finalResult = 1;
	for(let i = number; i > 1; i--) {
    finalResult *= i;
  }
  return finalResult;
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
