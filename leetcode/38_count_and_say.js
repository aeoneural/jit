/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n < 1) { 
        return '';
    }
    if (n === 1) { 
        return '1'; 
    }
    var base = '1'; 
    for (var i = 2; i <= n; i++) { 
        var nextNew = ''; 
        var count = 1; 
        // console.log(i)
        for (var j = 0; j < base.length; j++) {
            if (base[j] !== base[j + 1]) { 
                nextNew += (count + base[j]);
                count = 1;
            } else { 
                count++;
            }
        }
        // console.log(nextNew)
        base = nextNew;
    }
    return base;
};
for (var i = 0; i < 10; i++) { 
    console.log(i, ':', countAndSay(i))
}

