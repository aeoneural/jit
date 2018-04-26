/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    var words = paragraph.toLowerCase().split(/\W/);
    var mp = Object.create(null);
    console.log('words: ', words);

    words.filter(x => { if (x !== '') return x }).map(x => mp[x] = x in mp ? mp[x] + 1 : 1); 

    banned.map(x => mp[x] = -1);
    return Object.keys(mp).reduce((a, b) => mp[a] > mp[b] ? a : b);
    
};

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]));