const removeFromArray = function(list, ...targets) {
    let filteredArray = list.filter((element) => {
        return !targets.includes(element);
    });
    return filteredArray;
};

removeFromArray([1,2,3], 3,5);
// Do not edit below this line
module.exports = removeFromArray;
