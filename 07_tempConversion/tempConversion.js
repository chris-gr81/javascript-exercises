const convertToCelsius = function(fahr) {
  return(
    parseFloat(((fahr-32)*5/9).toFixed(1))
  ) 
};

const convertToFahrenheit = function(cels) {
  return(
    parseFloat(((cels*1.8)+32).toFixed(1))
  )
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
