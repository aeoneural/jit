// Given a string, your task is to count how many palindromic substrings in this string.
var countPalindrome = function(start, end, str) {
    var count = 0; 
    while (start >= 0 && end < str.length && str[start] === str[end]) { 
        count++;
        start--;
        end++;
    }
    return count; 
}
console.log(countPalindrome(0, 0, 'a'))
var countSubstring = function(str) { 
    var count = 0; 
    for (var i = 0; i < str.length; i++) {
        count += countPalindrome(i, i, str) + countPalindrome(i, i + 1, str);
    }

}