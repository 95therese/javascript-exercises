const removeFromArray = function(inputArray, ...valuesToRemove) {
    outputArray = [];
    for (const inputElmt of inputArray) {
        if (!valuesToRemove.includes(inputElmt)){
            outputArray.push(inputElmt);
        }
    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
