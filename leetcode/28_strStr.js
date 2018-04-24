/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0 || haystack.length === 0) {
        return -1
    }
    for (var i = 0; i <= haystack.length - needle.length; i++) { 
        if (haystack[i] === needle[0]) { 
            var exists = true;
            for (var k = 1; k < needle.length; k++) { 
                if (haystack[k + i] !== needle[k]) { 
                    exists = false; 
                    break;
                }
            }
            if(exists) { 
                return i;
            }
        }
    }
    return -1;
};
