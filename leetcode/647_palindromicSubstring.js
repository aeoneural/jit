/**
 * @param {string} s
 * @return {number}
 */
var isPalindrome = function(end, start, s) { 
    while (end > start) { 
        if (s[start] !== s[end]) { 
            return false; 
        } 
        start++;
        end--;
    }
    return true;
}
var countSubstrings = function (s) {
    
    var count = 0
    for (var i = 0; i < s.length; i++) {
        var word = ''
        word += s[i];
        console.log(word);
        count++;
        for (var k = i + 1; k < s.length; k++) {
            word += s[k]
            console.log(word)
            if (isPalindrome(0, word.length - 1, word)) { 
                count++
            } 
        }
        // word = ''
        
    } 
    return count; 
};
var countPalindrome = function(start, end, s) { 
    var count = 0;
    while (start >= 0 && end < s.length && s[start] === s[end]) { 
        count++;
        start--;
        end++;
    } 
    return count;
}
var countSubstringsOptimized = function(s) { 
    var count = 0;
    for (var i = 0; i < s.length; i++) { 
        count += countPalindrome(i, i, s) + countPalindrome(i, i + 1, s);
    }
    return count;
}

var str = 'aaa'
str = 'aaa'
var test = countSubstringsOptimized(str);
console.log(test);
// console.log(isPalindrome(str))