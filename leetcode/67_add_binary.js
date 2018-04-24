/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    var i = a.length-1;
    var j = b.length-1;
    var carry = 0; 
    var result = ''; 
    while (i >=0 || j >=0 || carry) { 
        const val1 = a[i] ? a[i] : 0; 
        const val2 = b[j] ? b[j] : 0;
        var sum = Number(val1) + Number(val2) + carry; 
        result = (sum % 2) + result; 
        carry = Math.floor(sum / 2);
        i--; 
        j--;
    }
    return result; 
};
console.log(addBinary('10', '1'))