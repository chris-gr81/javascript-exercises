const fibonacci = function(prop) {
    let num = parseInt(prop);
    if (num < 0) return "OOPS";
    let sum = 0;
    a = 1;
    b = 0;
    while (num > 0) {
        sum = a;
        a = a + b;
        b = sum;
        num--;
    }
    return b;
};



console.log(fibonacci(3));
// Do not edit below this line
module.exports = fibonacci;
