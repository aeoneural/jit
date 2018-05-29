var charIsDigit = function(char) { 
    return char >= '0' && char <= '9';
}
var basicCalculator = function(str) { 
    var len = str.length; 
    var sign = 1;
    var result = 0; 
    var stack = []
    console.log('length: ', len);

    for (var i = 0; i < len; i++) { 
        // digit
        console.log('each: ', str[i])
        if (charIsDigit(str[i])){ 
            var sum = str[i] - '0'; 
            // when digit is greater than 9
            while (i + 1 < len && charIsDigit(str[i + 1])) { 
                sum = sum * 10 + (str[i+1] - '0'); 
                i++; 
            }
            console.log('sum: ', sum * sign);
            result += sum * sign; 
        } else if (str[i] === '+') { 
            sign = 1; 
        } else if (str[i] === '-') { 
            sign = -1;
        } else if (str[i] === '(') { 
            stack.push(result); 
            stack.push(sign); 
            result = 0; 
            sign = 1; 
        } else if (str[i] === ')') {
            result = result * stack.pop() + stack.pop();
        }
        console.log('sign: ', sign);
        console.log('stack: ', stack);
        console.log('result: ', result);
        console.log('----------------')
    }
    return result;

}
// console.log(basicCalculator("1 + 1"))
// console.log(basicCalculator(" 2-1 + 2 "))
console.log(basicCalculator("(1+(4+5+2)-3)+(6+8)"))