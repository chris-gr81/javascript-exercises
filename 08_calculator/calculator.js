const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((temp, next) => {
    return temp + next;
  }, 0);
};

const multiply = function(a) {
  return a.reduce((temp, next) => temp * next);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(num) {
	let result = num;
  if (num === 0 || num === 1)
    return 1;
  while(num > 1) {
    num --;
    result *= num;
  }
  return result;
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
