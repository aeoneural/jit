/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    var insertIndex = 0, index = 0; 

    while (index < chars.length) { 
        var currentChar = chars[index]; 
        var count = 0; 
        while (index < chars.length && chars[index] === currentChar) { 
            index++; 
            count++;
        }
        chars[insertIndex++] = currentChar; 
        if (count !== 1) { 
            var len = count.toString(); 
            for (var i = 0; i < len.length; i++) { 
                chars[insertIndex++] = len[i]
            }
        }
    }
    return chars.slice(0, insertIndex)
};

var test = compress(['a', 'a','a', 'b', 'b', 'c', 'c', 'c', 'c']);
console.log(test);