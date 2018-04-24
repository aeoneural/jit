/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    // var str = str.split(' ');
    // if (pattern.length !== str.length) {
    //     return false;
    // }
    // var len = pattern.length;
    // var hashTable = {};
    // var hashTableTwo = {}
    // for (var i = 0; i < len; i++) {
    //     if (!hashTable.hasOwnProperty(pattern[i]) && !hashTableTwo.hasOwnProperty(str[i])) { 
    //         hashTable[pattern[i]] = i; 
    //         hashTableTwo[str[i]] = i; 
    //         console.log(hashTable, ':', hashTableTwo);
    //     } else { 
    //         if (hashTable[pattern[i]] === hashTableTwo[str[i]]) {
    //             continue;
    //         } 
    //         return false;
            
    //     }
    // }
    // return true;   
    var str = str.split(' '); 
    if (pattern.length !== str.length) { 
        return false;
    }
    var hashTable = {};
    var set = new Set();
    var len = str.length; 
    for (var i = 0; i < len; i++) { 
        if (!hashTable[pattern[i]]) { 
            if (set.has(str[i])) { 
                return false;
            }
            set.add(str[i]);
            hashTable[pattern[i]] = str[i]; 
        } else { 
            if (hashTable[pattern[i]] !== str[i]) {
                return false;
            }
        }
    }
    return true;
};
var test = wordPattern('abba', 'dog cat cat fish'); 
console.log(test);