/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */


var countPrimeSetBits = function (L, R) {
    var res = 0;
    for (var i = L; i <= R; i++) { 
        var num = count(i);
        // console.log('num: ', num);
        if (isPrime(num)) res++;
    }
    return res; 
};

var count = function(n) { 
    return n === 0 ? 0 : (n & 1) + count(n >> 1);
}

var isPrime = function(n) { 
    if (n < 2) return false;
    var i = 2;
    while (i < n) {
        if (n % i === 0) return false;
        i++;
    }
    return true;
}
console.log(countPrimeSetBits(10, 15));