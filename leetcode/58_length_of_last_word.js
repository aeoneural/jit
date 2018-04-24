
var lengthOfLastWord = function (s) {
    var i = s.length - 1;
    while(i >= 0 && s[i] === ' ') i--;
    if (i >= 0) {
        var end = i;
        while (i >= 0 && s[i] !== ' ') i--;
        return end - i;
    }
    return 0;
};
var a = lengthOfLastWord('aaa aasd    ')
console.log(a)
