/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num === 0) return '0'
    var res = '';
    var flag = num > 0 ? 1 : -1;
    if (flag < 0) { 
        num *= (-1);
    }
    while (num > 0) {
        res = (num % 7) + res; 
        num = Math.floor(num / 7);
    }

    return flag === 1 ? res : '-' + res;
};
var a = convertToBase7(100)
console.log(a);