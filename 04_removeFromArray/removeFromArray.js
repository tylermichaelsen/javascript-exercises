const removeFromArray = function(array, element) {
    // Create new array
    let newArray = new Array();
    // Start loop
    for(let i = 0; i < array.length; i++) {
        // if element at loop index is argument
        if(array[i] === element) {
            // continue
            continue;
        }
        // else add element at loop index to array
        newArray.push(array[i]);
    }
    
    // End loop
    // Return array
};

// Do not edit below this line
module.exports = removeFromArray;
