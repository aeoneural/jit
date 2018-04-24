/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
    var count = 0;
    for (var i = 1; i <= N; i++) { 
        if (isValid(i)) count++;
    }
    return count;
};
var isValid = function(n) { 
    var valid = false; 

    while (n > 0) {
        if (n % 10 === 2 || n % 10 === 5 
            || n % 10 === 6 || n % 10 === 9 ) valid = true;
        else if (n % 10 === 3 || n % 10 === 4 || n % 10 === 7) return false;
        n = n / 10;
    }
    return valid;
}

console.log(rotatedDigits(6))