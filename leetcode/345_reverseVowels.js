/**
 * @param {string} s
 * @return {string}
 */

var reverseVowels = function(s) {
    
    var vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    var start = 0; 
    var end = s.length - 1; 
    var s = s.split('');
    while (start < end) { 
        var char1 = s[start].toLowerCase();
        var char2 = s[end].toLocaleLowerCase();
        if (vowels.has(char1) && vowels.has(char2)) { 
            // swap(start, end); 
            var temp = s[start]; 
            s[start] = s[end]; 
            s[end] = temp;
            start++; 
            end--;
        } else if (vowels.has(char1)) { 
            end--; 
        } else { 
            start++;
        }
    }
    return s.join('');
};
var test = reverseVowels('hello'); 
console.log(test);