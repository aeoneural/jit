/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    var reverse = (start, end, s) => {
        while (start < end) { 
            var temp = s[start];
            s[start] = s[end];
            s[end] = temp; 
            start++;
            end--;
        }
    }
    var i = 0; 
    s = s.split('');
    var len = s.length; 
    
    while ( i < len) { 
        if ((i + 2 * k - 1) < len || (i + k - 1) < len) { 
            reverse(i, i + k - 1, s);
        } else { 
            reverse(i, len - 1, s);
        }
        i += (2 * k)
        // console.log('arr: ', s)
        
    }
    return s.join('');
};
console.log(reverseStr('abcdefghik', 3));