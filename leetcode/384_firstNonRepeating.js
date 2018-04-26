/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var found = false; 

    var hash = {}; 
    for (var i = 0; i < s.length; i++) {
        if (hash.hasOwnProperty(s[i])) {
            hash[s[i]]['c']++;
        } else {
            hash[s[i]] = {'c': 1, 'i': i };
        }
    }
    // console.log('hash: ', hash);
    var least = s.length
    for (var key in hash) {
        if (hash[key]['c'] === 1) { 
            if (least > hash[key]['i']) { 
                least = hash[key]['i'];
            }
        } 
    }
    return least === s.length ? -1 : least;
};
console.log(firstUniqChar("loveleetcode"));
