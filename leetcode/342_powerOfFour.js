/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n > Math.pow(2, 31) - 1) { return false; }
    if (n <= 0) { return false; };
    var power = 4; 
    while (n > 1) { 
        if (n%power !== 0) { 
            return false;
        }
        n = n / power;
    }
    return true;  
};
var test = isPowerOfFour(16);
console.log(test);