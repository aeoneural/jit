/**
 * @param {number} num
 * @return {boolean}
 */

var isUgly = function(num) {
    if (num <= 0) { return false; }
    var uglySet = new Set([2,3,5]);
    var nextPrime = 2; 
    while (num > 1) {
        if (nextPrime > 5) {
            return false;
        }
        if (num % nextPrime === 0) { 
            if (!uglySet.has(nextPrime)) {
                return false;
            }
            num /= nextPrime;
        } else { 
            nextPrime++;
        }
    }
    return true; 
};

var test = isUgly(12); 
console.log(test)