/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var roman = { "M": 1000, "D" : 500, "C": 100, "L":50, "X":10, "V":5, "I":1};
    var res = 0;
    for (var i = 0; i < s.length-1; i++) { 
        if (roman[s[i]] < roman[s[i+1]]) { 
            res -= roman[s[i]];
        } else { 
            res += roman[s[i]];
        }
    }
    console.log(res + roman[s[s.length - 1]])
    return res + roman[s[s.length-1]];
}

romanToInt(['C', 'D', 'L'])