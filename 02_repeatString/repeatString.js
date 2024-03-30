const repeatString = function(string, number) {
    let returnString = "";
    for(let i = 0; i < number; i++) {
        returnString += string;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
