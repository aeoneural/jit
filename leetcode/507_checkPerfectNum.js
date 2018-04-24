/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num < 1) { 
        return false;
    }
    var org = num;
    var total = 0;
    for (var i = 1; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) { 
            if ( num / i === i) { 
                total += i;
            } else { 
                total += (i + num / i)
            }
        }
    }
    return (total - org) === num;
    
    

    
};
checkPerfectNumber(28)