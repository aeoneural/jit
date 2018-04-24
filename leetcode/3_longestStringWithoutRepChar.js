/*
strategy:  
*/
// var lengthOfLongestSubstring = function (s) {
//     if (s.length === 0) {
//         return '';
//     }
//     if (s.length === 1) {
//         return s[0];
//     }
//     var result = [];
//     var max = 0;
//     var secondHash = {}
//     var hash = {};
//     var i = 0;
//     var k = 0;
//     while (i < s.length) {
//         if (hash.hasOwnProperty(s[i])) {
//             // console.log(s.slice(0,i))
//             secondHash[s.slice(k, i)] = 1;
//             result.push(s.slice(k, i));
//             if (result[max].length < s.slice(0, i).length) {
//                 max += 1
//             }
//             k = i;
//             hash = {};
//         } else {
//             if (!secondHash.hasOwnProperty(s[i])) {
//                 if (result.length > 0 && (result[max] < s[i].length)) {
//                     max += 1;
//                 }
//                 result.push(s[i]);
//             }
//             hash[s[i]] = 1;

//         }
//         i += 1;
//     }
//     // console.log(result)
//     // console.log(max)
//     // console.log(result[max].length)
//     return result[max].length
// };

var lengthOfLongestSubstring = function(s) { 
    var n = s.length; 
    var ans = 0; 
    var map = {}; 
    for (var j = 0, i = 0; j < n; j++) { 
        if (map[s[j]]) { 
            i = Math.max(map[s[j]], i);
        } 
        ans = Math.max(ans, j - i + 1); 
        map[s[j]] = j+1; 
    } 
    console.log(ans)
    return ans
}
lengthOfLongestSubstring('abcabcbb')
