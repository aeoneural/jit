/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x > Math.pow(2, 31) - 1 || x < Math.pow(2, 31) - Math.pow(2, 31) * 2) {
        return 0;
    }
    var finalResult = 0;
    var signed = false;
    var multiplier = 0; 
    if (x < 0) { 
        signed = true;
    }
    var rec = function(x) { 
        if (x === 0) { 
            return; 
        }
        finalResult = finalResult * 10 + (x%10);
        rec(Math.floor(x / 10)); 
    }
    rec(Math.abs(x));
    
    if (finalResult > Math.pow(2, 31) - 1 || finalResult < Math.pow(2, 31) - Math.pow(2, 31) * 2) { 
        return 0;
    }
    return signed ? finalResult - 2 * finalResult : finalResult; 
};
console.log(reverse(-123))