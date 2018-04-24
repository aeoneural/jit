/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    var charA = 'A'; 
    var charL = 'L';
    var countA = 0; 
    var countContiniousL = 0;
    var start = 0; 
    var next = start + 1;
    while (start < s.length) { 
        if (s[start] === charA) { 
            countA++;
        } else if (s[start] === charL) {
            countContiniousL++;
            console.log('count L: ', countContiniousL)
            var next = start + 1; 
            if (countContiniousL > 2 || countA > 1) {
                return false;
            }
            if (next < s.length && s[next] !== s[start] ) { 
                countContiniousL = 0;
            }
            
        } 
       
        start++; 
    }
    return true;
};

var test = checkRecord("LLLALL")
console.log(test);