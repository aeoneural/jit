 /*
 * @param {string} s
 * @return {string}
 */
var isPalindrome = function(start, end, s) { 
    // while (end > start) { 
    //     if (s[start] !== s[end]) { 
    //         return false; 
    //     } 
    //     start++;
    //     end--;
    // }
    // return true;

}
var longestPalindromeN3 = function(s) {
    var max = 0; 
    var startR = 0; 
    var endR = 0; 
    
    for (var start = 0; start < s.length; start++) { 
        for (var end = s.length - 1; end >= start; end--) {
            if (isPalindrome(start, end, s)) { 
                if (max < (end - start) + 1) { 
                    startR = start; 
                    endR = end; 
                    max = (end - start) + 1; 
                }
                break;
            }
        }
    }
    return s.substring(startR, endR + 1);
};
var expandPalindromeOdd = function(s, mid) {
    var prev = mid - 1; 
    var next = mid + 1;
    while (prev >= 0 && next < s.length && s[prev] === s[next]) { 
            prev--; 
            next++; 
    }
    return next-prev-1;
}
var expandPalindromeEven = function (s, mid) {
    var next = mid + 1;
    while (mid >= 0 && next < s.length && s[mid] === s[next]) {
        mid--;
        next++;
    }
    return next - mid - 1;
}

var longestPalindrome = function(s) { 
    var max = 0 
    var startR; 
    var endR; 
    for (var mid = 0; mid < s.length; mid++) { 
        var even = expandPalindromeEven(s, mid); 
        if (even > max) { 
            startR = (mid - even / 2) + 1;
            endR = (mid + even / 2); 
            max = even;
        }
        var odd = expandPalindromeOdd(s, mid);
        if (odd > max) { 
            
            startR = mid - Math.floor(odd / 2); 
            endR = mid + Math.floor(odd / 2);
            max = odd;
            
        } 
    }
    return s.substring(startR, endR + 1);
}

console.log(longestPalindrome('caba'))
