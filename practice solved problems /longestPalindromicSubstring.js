

var expandPalindromeOdd = function (s, mid) {
    var prev = mid - 1;
    var next = mid + 1;
    while (prev >= 0 && next < s.length && s[prev] === s[next]) {
        prev--;
        next++;
    }
    return next - prev - 1;
}
var expandPalindromeEven = function (s, mid) {
    var next = mid + 1;
    while (mid >= 0 && next < s.length && s[mid] === s[next]) {
        mid--;
        next++;
    }
    return next - mid - 1;
}
var longestPalindromicSubstring = function(str) { 
    var max = 0; 
    var startR;
    var endR;

    for (var mid = 0; mid < str.length; mid++) { 
        var even = expandPalindromeEven(str, mid);
        if (even > max) {
            startR = (mid - even / 2) + 1;
            endR = (mid + even / 2);
            max = even;
        }
        var odd = expandPalindromeOdd(str, mid);
        if (odd > max) {
            startR = mid - Math.floor(odd / 2);
            endR = mid + Math.floor(odd / 2);
            max = odd;
        }    
    }
    return str.substring(startR, endR + 1);

}

console.log(longestPalindromicSubstring('ababa'));