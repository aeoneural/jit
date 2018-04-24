/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    var result = ''
    if (S.length <= K) {
         
        var index = 0; 
        while (index < S.length) { 
            if (S[index] !== '-') { 
                result += S[index];
            }
            index++;
        }
        return result;
    }
    var index = S.length - 1;
    var count = 0;
    while (index > -1) { 
        if (count === K) { 
            // console.log('when it is k: ', S[index]);
            count = 0; 
            result = '-' + result;
            if (S[index] !== '-') {
                // console.log('each: ', S[index]);
                result = S[index] + result;
                count++;
            }
        } else { 
            if (S[index] !== '-') { 
                // console.log('each: ', S[index]);
                result = S[index] + result;
                count++;
            }
        }
        index--;
    }
    return result;
};

licenseKeyFormatting('2-5g-3-J', )