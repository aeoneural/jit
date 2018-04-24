/**
 * @param {number} num
 * @return {boolean}
 * 
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.
 */
var isPerfectSquare = function(num) {
    var start = 1; 
    
    while (Math.pow(start, 2) <= num) { 
        // console.log('power: ', Math.pow(start, 2));
        if (start * start === num) { 
            return true; 
        } 
        start++;
    }
    return false;
};

var test = isPerfectSquare(100);
console.log(test);