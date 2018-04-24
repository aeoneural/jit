
var isPerfectSquare = function(num) { 
    return Math.sqrt(num) % 1 === 0;
}
var judgeSquareSum = function(c) { 
    if (c < 0) { 
        return false;
    }
    for (var i = 0; i < Math.ceil(Math.sqrt(c)); i++) { 
        if (isPerfectSquare(c - Math.pow(i, 2))) { 
            return true;
        }
    }
    return false;
}

for (var i = 1; i < 20; i++) { 
    var test = judgeSquareSum(i); 
    console.log('i: ', i, '=> ', test);
}
