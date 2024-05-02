const convertToCelsius = function(degreesFahrenheit) {
  degreesCelsius = (degreesFahrenheit - 32) * 5/9;
  return parseFloat(degreesCelsius.toFixed(1));
};

const convertToFahrenheit = function(degreesCelsius) {
  degreesFahrenheit = degreesCelsius * 9/5 + 32;
  return parseFloat(degreesFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
