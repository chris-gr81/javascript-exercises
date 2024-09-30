const palindromes = function (phrase) {
    const alpha = [
        "a", "b", "c", "d", "e", "f", "g",
        "h", "i", "j", "k", "l", "m", "n",
        "o", "p", "q", "r", "s", "t", "u",
        "v", "w", "x", "y", "z", "0", "1",
        "2", "3", "4", "5", "6", "7", "8",
        "9"
    ]

    const straight = phrase
        .toLowerCase()
        .split("")
        .filter((prop) => alpha.includes(prop));

    const reversed = [...straight].reverse();
    return (straight.join("") === reversed.join(""))
};


// Do not edit below this line
module.exports = palindromes;
