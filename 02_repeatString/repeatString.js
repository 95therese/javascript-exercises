const repeatString = function(string, num) {
    if(num < 0){
        return 'ERROR';
    }
    
    let outputString = '';
    while(num > 0) {
        outputString += string;
        num --;
    }
    return outputString
};

// Do not edit below this line
module.exports = repeatString;
