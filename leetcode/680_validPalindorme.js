/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s, start, end) { 
    // console.log('start: ',s[start])
    // console.log('start: ', s[end])
    while (start <= end) { 
        if (s[start] !== s[end]) { 
            return false;
        }
        start++; 
        end--;
    }
    return true;
}
var validPalindrome = function(s) {
    var start = 0; 
    var end = s.length - 1; 
    while (start <= end) { 
        if (s[start] !== s[end]) {
            // console.log('here we are:') 
            return isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1); 
        }
        start++; 
        end--;
    }
    return true;  
};
var test = validPalindrome('abc');
console.log(test);