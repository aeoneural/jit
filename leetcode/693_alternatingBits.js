/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    // console.log('n \t\t', n);
    // console.log('n >> 1 \t\t', n >> 1); 

    while (n > 0) { 
        var num = n >> 1; 
        console.log(n & 1, '==== ', n >> 1 & 1)
        if ((n & 1) === (num & 1)) return false 
        n = n >> 1;
    }
    return true;
    
    // n = n & (n >> 1); 
    // // console.log('n & (n >> 1) \t\t', n)
    // // console.log('n + 1 \t\t', n + 1); 
    // // console.log('n ^ (n + 1) \t\t', n ^ (n + 1));
    
    // return (n ^ (n + 1)) === 0;


};

var test = hasAlternatingBits(4)
console.log('test: ', test);