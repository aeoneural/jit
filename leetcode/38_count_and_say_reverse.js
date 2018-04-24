var countandSayReverse = function(number) { 
    if (number <= 0) return '';
    var number = String(number); 
    
    var start = 0; 
    var end = number.length; 
    var result = ''
    while (start < end-1) { 
        result += number[start + 1].repeat(number[start]);
        start += 2;
    }
    return result;
}
var test = countandSayReverse(312211)
console.log(test);