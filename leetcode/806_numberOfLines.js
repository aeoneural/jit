/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {
    var index = 0; 
    var total = 0;
    var lines = 1; 

    while (index < S.length) { 
        var wordLength = widths[S[index].charCodeAt(0) - 'a'.charCodeAt(0)];
        // console.log(S[index].charCodeAt(0) - 'a'.charCodeAt(0))
        if (total + wordLength > 100) { 
            lines++;
            total = wordLength;
        } else { 
            total += wordLength;
        }
        index++;  
    }

    return [lines, total]

};

var widths = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
var S = "abcdefghijklmnopqrstuvwxyz"
widths = [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
S = "bbbcccdddaaa"
var out = numberOfLines(widths, S);
console.log(out);