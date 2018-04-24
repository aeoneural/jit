/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    var i = 0; 
    var allLow = 0;
    var firstUpper = false; 

    while (i < word.length) { 
        if (word[i].charCodeAt(0) > 96 && word[i].charCodeAt(0) < 123) { 
            allLow++;   
        } else { 
            if (i === 0) {
                firstUpper = true;
            } else { 
                allLow--;
            }
            
        }
        i++;
    }
    if (allLow < 0) { 
        allLow *= (-1)
    }
    // console.log('allLow: ', allLow);
    if ((firstUpper && allLow === (word.length - 1)) || (allLow === word.length)) { 
        return true; 
    } else { 
        return false; 
    }
    
};

var test = ['USA', 'leetcode','Google', 'FlaG']
test.forEach((element) => { 
    console.log(detectCapitalUse(element));
})