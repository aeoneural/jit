/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (input) {
    if (input.length === 1) { 
        return false;
    }
    
    var prefIndex = 0; 
    var end = Math.floor(input.length / 2)
    while (prefIndex <= end) {
        var substr = input.slice(0, prefIndex)
        var times = Math.floor(input.length / substr.length); 
        if (input.length % substr.length === 0) { 
            if (substr.repeat(times).includes(input)) { 
                return true;
            }
        }
        prefIndex++;
    }
    return false;   
};


var test = 'abab'
// test = "abaababaab"
var testFunc = repeatedSubstringPattern(test);
console.log(testFunc)

