/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var complexNumberMultiply = function(a, b) {
    a = a.split('+');
    b = b.split('+');
    a[1] = a[1].slice(0, a[1].length - 1)
    b[1] = b[1].slice(0, b[1].length - 1)
    return a[0] * b[0] + a[1] * b[1] * -1 + '+' + (a[0] * b[1] + a[1] * b[0] + 'i')
};
// complexNumberMultiply("1+1i", "1+1i")

complexNumberMultiply("1+-1i", "0+0i")

complexNumberMultiply("78+-76i", "-86+72i")