var findNthDigit = (n) => { 
    var len = 1; 
    var count = 9; 
    var start = 1; 

    while (n > (len * count)) { 
        n -= len * count; 
        len += 1; 
        count *= 10; 
        start *= 10; 
    }
    start += (n - 1) / len; 
    var s = start.toString(); 
    return (s.charAt((n - 1) % len)).match(/\d+/g).map(Number)[0]
}

var test = findNthDigit(10);

for (var i = 1; i < 15; i++) { 
    console.log(findNthDigit(i));
}
// console.log(test)