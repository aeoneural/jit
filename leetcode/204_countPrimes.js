/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 1) return 0; 
    var count = 0;
    var Prime = [];

    for (var i = 0; i <= n; i++) { 
        Prime.push(1);
    }
    Prime[0] = 0; 
    Prime[1] = 0;
    var len = Math.sqrt(n);
    for (var i = 2; i <= len; i++) { 
        if (Prime[i] === 1) { 
            for (var j = 2; i * j <= n; j++) { 
                Prime[i*j] = 0; 
            }
        }
    }

    for (var i = 0; i < Prime.length; i++) { 
        if(Prime[i]) count++;
    }
    return count; 
};
countPrimes(10)