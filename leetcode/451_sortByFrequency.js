/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    
    var hMap = new Map();
    for (var i = 0; i < s.length; i++) { 
        if (!hMap.get(s[i])) { 
            hMap.set(s[i],1);
        } else { 
            hMap.set(s[i], hMap.get(s[i]) + 1 )
        }
    } 
    var bucket = [];
    for (var key of hMap) { 
        if (bucket[key[1]] === undefined) { 
            bucket[key[1]] = ''
        }
        // for (var i = 1; i <= key[1]; i++) { 
        //     bucket[key[1]] += key[0]
        // }
        bucket[key[1]] += key[0].repeat(key[1]);
    }
    var res = '';
    for (var i = bucket.length; i >= 0; i--) { 
        if (bucket[i] !== undefined) { 
            res += bucket[i];
        }
        
    }
    console.log(bucket)
    console.log(res);
    return res;

};
var text = 'Aaabb';
var test = frequencySort(text);
console.log(test);