/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

 
var reverseBits = function(n) {
    
    if (n === 0) { return 0; }
    var res = 0;
    for (var i = 0; i < 32; i++){ 
        if (n & 1) res++;
         
        n = n >>> 1;
        if ( i < 31) { 
            res = res << 1;
        }
    } 
    return res; 
};
var input = reverseBits(00000000000000000000000000001101);
console.log(input);

var reverseBitsTwo = function(A) {
    var a = 0;
    var c = 31;
    while (A > 0) {
        if (A % 2 == 1)
            a += pow(2, c);

        c--;
        A = A / 2;
    }

    return a;
}