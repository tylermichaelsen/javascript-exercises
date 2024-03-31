const reverseString = function(string) {
    // Create 'reverseString' array with size of string length
    let reversedString = Array.apply(null, Array(string.length))
    .map(function () { });
    // Create reversed string variable starting index at last element of string
    let reversedIndex = string.length;
    // Start Loop
    for(let i = 0; i < string.length; i++) {
    // Get character at loop index of string
    // and put it at reverseString index of the reversed string array
        reverseString[reversedIndex] = string.charAt(i);
    // Decrement reverse string array index
        reversedIndex--;
    // End Loop
    }
    // Return reversed string array as string
    return reverseString.join("");
};

// Do not edit below this line
module.exports = reverseString;
