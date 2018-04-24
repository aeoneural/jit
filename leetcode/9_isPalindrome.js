/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    if (typeof x !== 'number' || x < 0 || x > Math.pow(x, 31 - 1) || x < Math.pow(x, 32) - Math.pow(x, 32) * 2) { 
        return false; 
    }
    if (Math.floor(x/10) === 0) { 
        return true
    }
    var rec = function(x, reverse) { 
        if (x === 0) { 
            return reverse;
        }
        return rec(Math.floor(x/10), reverse*10 + (x%10));
    }
    console.log(rec(x, 0) === x);
    return (rec(x,0) === x);
};
isPalindrome(10)
