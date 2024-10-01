const findTheOldest = function(people) {
    return people
        .map((item) => {
            if (!item.yearOfDeath) {
                item.yearOfDeath = new Date().getFullYear();
            }
            return item;
        })
        .sort((a, b) => {
            firstGuy = a.yearOfDeath - a.yearOfBirth;
            nextGuy = b.yearOfDeath - b.yearOfBirth;
            return nextGuy - firstGuy;
        })[0];
    
};


// Do not edit below this line
module.exports = findTheOldest;
