const reverseString = function(text) {
    let splitText = text.split("");
    let arrayReverse = splitText.reverse();
    return arrayReverse.join("");
};

// Do not edit below this line
module.exports = reverseString;
