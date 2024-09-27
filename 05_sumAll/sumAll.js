const sumAll = function(num1, num2) {
    
    function isValid(num) {
        return (num >= 0 && Number.isInteger(num)) ? true : false;
    }

    if (!isValid(num1) || !isValid(num2)) {
        return "ERROR";
    } 

    let numMin = Math.min(num1, num2);
    let numMax = Math.max(num1, num2);

    let sum = 0;
    for (numMin; numMin <= numMax; numMin++) {
        sum += numMin;
    }

    return sum;

};
// Do not edit below this line
module.exports = sumAll;
