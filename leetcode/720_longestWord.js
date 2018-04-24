/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    words.sort((x, y) => { return x > y});
    
    var res = ''; 
    var set = new Set(words);
    for (var i = 0; i < words.length; i++) { 
        var isValid = true;
        var key = ''
        for (var j = 0; j < words[i].length - 1; j++) {
            key += words[i][j];
            if (!set.has(key)) { 
                isValid = false; 
                break;
            }
        }
        if (isValid && words[i].length > res.length) { 
            res = words[i];
        }
    }
    return res; 
};

var test = longestWord(["w", "wo", "wor", "worl", "world"])
console.log(test);