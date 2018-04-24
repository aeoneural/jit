/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    
    var len = letters.length; 
    var start = 0; 
    var end = len - 1; 
    if (letters[len - 1] <= target) return letters[0]
    while (start <= end) { 
        var mid = Math.floor((start + end) / 2); 
        if (letters[mid] <= target) {
            start = mid + 1 
        } else {
            end = mid - 1;
        }      
    }
    return letters[start]

};

var test = nextGreatestLetter(['c', 'f', 'j'], 'c');
console.log('test: ', test);