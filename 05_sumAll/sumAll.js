const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)){
        return 'ERROR';
    }

    let start;
    let end;
    if (a > b){
        start = b;
        end = a;
    } else {
        start = a;
        end = b;
    }

    let sum = 0;
    for (i = start; i <= end; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
