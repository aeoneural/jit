/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    var index1 = num1.length - 1;
    var index2 = num2.length - 1;
    var carry = 0;
    var result = '';

    while (index1 >= 0 || index2 >= 0 || carry) {
        var n1 = Number(num1[index1]) ? Number(num1[index1]) : 0;
        var n2 = Number(num2[index2]) ? Number(num2[index2]) : 0;
        var sum = n1 + n2 + carry;
        carry = Math.floor((sum) / 10);
        result = sum % 10 + result;
        index1--;
        index2--;
    }

    return result;
};
// console.log(addStrings('111', '200'))
var multiply = function (num1, num2) {
    var short = num1.length > num2.length ? num2.split('') : num1;
    var long = num1.length > num2.length ? num1.split('') : num2;
    for (var i = 0; i < short.length; i++) { 
        short[i] = Number(short[i])
    }
    for (var j = 0; j < long.length; j++) {
        long[j] = Number(long[j]);
    }
    var a = short.length - 1
    var b = long.length - 1;

    if (num1 === '0' || num2 === '0') return '0';

    var table = []
    for (var i = a; i >= 0; i--) {
        var carry = 0;
        var result = 0
        var sum = 0;
        var power = 0;
        var test = []
        for (var j = b; j >= 0 || carry; j--) {
            var number1 = (short[i]) ? (short[i]) : 0;
            var number2 = (long[j]) ? (long[j]) : 0;
            sum = (carry + (number1 * number2));
            carry = Math.floor(sum / 10);
            test.unshift(((sum % 10)))
            // result += ((sum % 10) * Math.pow(10, power))

            power++;
        }

        table.push(test.slice());
    }
    
    if (table.length === 1) {
        return table[0].join('');
    }
    // var sum = 0;

    // console.log('table=======', table);
    for (var i = 0; i < table.length; i++) {
        for (var k = 0; k < i; k++) {
            table[i].push(0);
        }
        // console.log('each number', table[i])
        // sum += table[i]
    }
    // console.log('table: ',table)
    var k = table[table.length - 1].length;
    var carry = 0
    var str = ''
    while (k >= 0 || carry) { 
        var sum = 0;
        for (var i = 0; i < table.length; i++) {
            var number = table[i] !== undefined ? table[i].pop() : 0;
            // console.log(number);
            if (number !== undefined) { 
                sum += number
            }
            
        }
        if (sum === 0 && carry === sum ) { 
            break;
        }
        sum += carry;
        carry = Math.floor(sum / 10)
        str = (sum % 10) + str;

        k--;
    }

    return str
    
};

// console.log(multiply('999', '9'))
// console.log(multiply('133', '12'))
// console.log(multiply('12', '12'));
// console.log(multiply('0', '11111'))
// console.log(multiply("123456789", "987654321"))
console.log(multiply('52', '60'))
// console.log(8888888889 + 79012345680 + 691358024700 + 5925925926000 + 49382716050000 + 395061728400000 + 2962962963000000)

var multiplySol = (num1, num2) => { 
    var m = num1.length, n = num2.length;
    var pos = new Array(m + n).fill(0);

    for (var i = m - 1; i >= 0; i--) { 
        for (var j = n - 1; j >= 0; j--) { 
            var mul = (num1.charAt(i) - '0') * num2.charAt(j) - '0';
            var p1 = i + j, p2 = i + j + 1; 
            var sum = mul + pos[p2];
            pos[p1] += Math.floor(sum / 10); 
            pos[p2] = (sum % 10);
        }
    }
    var str = '';
    for (var i = 0; i < pos.length; i++) { 
        if (!(str.length === 0 && pos[i] === 0)) { 
            str += pos[i];
        }
    }
    return str.length === 0  ? '0' : str;
}

/*

var addStrings = function (num1, num2) {
    var index1 = num1.length - 1;
    var index2 = num2.length - 1;
    var carry = 0;
    var result = '';

    while (index1 >= 0 || index2 >= 0 || carry) {
        var n1 = Number(num1[index1]) ? Number(num1[index1]) : 0;
        var n2 = Number(num2[index2]) ? Number(num2[index2]) : 0;
        var sum = n1 + n2 + carry;
        carry = Math.floor((sum) / 10);
        result = sum % 10 + result;
        index1--;
        index2--;
    }

    return result;
};
// console.log(addStrings('111', '200'))
var multiply = function (num1, num2) {
    var short = num1.length > num2.length ? num2.split('') : num1;
    var long = num1.length > num2.length ? num1.split('') : num2;
    for (var i = 0; i < short.length; i++) {
        short[i] = Number(short[i])
    }
    for (var j = 0; j < long.length; j++) {
        long[j] = Number(long[j]);
    }
    var a = short.length - 1
    var b = long.length - 1;

    if (num1 === '0' || num2 === '0') return '0';

    var table = []
    for (var i = a; i >= 0; i--) {
        var carry = 0;
        var result = '';
        var sum = 0;
        for (var j = b; j >= 0 || carry; j--) {
            var number1 = (short[i]) ? (short[i]) : 0;
            var number2 = (long[j]) ? (long[j]) : 0;
            sum = (carry + (number1 * number2));
            carry = Math.floor(sum / 10);
            result = (sum % 10) + result;
        }
        table.push(result);
        // sum = 0;
    }
    console.log('table: ', table);
    if (table.length === 1) {
        table[0]
    }
    var sum = '0';
    for (var i = 0; i < table.length; i++) {
        for (var k = 0; k < i; k++) {
            table[i] += 0;
        }
        sum = addStrings(sum, table[i]);
    }
    return sum;

};

*/

