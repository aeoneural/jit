/**
 * @param {number} n
 * @return {number}
 */
var isPalindrome = function(number){ 
    if (number < 10) { 
        return true;
    }
    var reverseNumber = 0; 
    var temp = number; 
    while (number > 0) { 
        reverseNumber = reverseNumber * 10 + number % 10;
        number = Math.floor(number/10);
    }
    return temp === reverseNumber ? true : false;
}

var largestPalindrome = function(n) {
    var max = 0; 
    var start = Math.pow(10, n) - 1;
    var stop = Math.pow(10, n-1) - 1;  

    for (var i = start; i > stop; i--) { 
        for (var k = start; k > stop; k--) { 
            var number = i * k; 
            if (isPalindrome(number) && number > max) { 
                max = number; 
            }
        }
    }
    return max % 1337; 
};
var test = largestPalindrome(2)
console.log(test);