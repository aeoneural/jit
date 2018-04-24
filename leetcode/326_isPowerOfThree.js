/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0) { return false; };
    var powerSet = new Set(); 
    var powerPrime = 3; 
    while (n > 1) { 
        if (n%powerPrime) { 
            return false;
        }
        n = n / powerPrime;
    }
    return true;
    
};
var test = isPowerOfThree(-3);
console.log(test);