var calc = {};

calc.add = function(x,y) {
  return x + y;
};
calc.subtract = function(x,y) {
  return x - y;
};
calc.divide = function(x,y) {
  return x / y;
};
calc.multiply = function(x,y) {
  return x * y;
};
module.exports = calc;