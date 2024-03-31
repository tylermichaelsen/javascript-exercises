const sumAll = function(number1, number2) {
    let finalResult = 0;
    if(number1 < 0 || number2 < 0 ||
       typeof number1 !== 'number' || typeof number2 !== 'number') {
        return 'ERROR';
    }
    if(number2 > number1) {
        for(let i = number2; i !== number1 - 1; i--) {
            finalResult += i;
        }
    } else {
        for(let i = number1; i !== number2 - 1; i--) {
            finalResult += i;
        }
    }
    
    return finalResult;
};

// Do not edit below this line
module.exports = sumAll;
