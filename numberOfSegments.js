/**
 * 434
Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.
Please note that the string does not contain any non-printable characters.

Example:
Input: "Hello, my name is John hello"
Output: 5

 * @param {string} s
 * @return {number}
 * 
 */
var countSegments = function (s) {
    var result = [];
    var start = 0;
    while (start < s.length) { 
        var end = start + 1; 
        while (s[start] !== ' ' && end < s.length) { 
            end++
        }  
        console.log('end: ', end, '--> ', start);
        start++;
    }
};
console.log(countSegments("Hello, my name is John"))