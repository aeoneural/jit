/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    var stack = temperatures.reduce((acc,el,i) => { 
        if (i > 0) { 
            acc.push(el);
        }
        return acc;
    }, [])
    var res = [];
    temperatures.forEach((el, i) => { 
        var count = 1;
        // console.log('each: ', el);
        // console.log('stack: ', stack);
        if (stack.length === 0) {
            count = 0;
        }
        if (stack.length > 0 && el >= stack[0]) {
            var j = 0
            while (stack.length > 0 && el >= stack[j]) {

                count++;
                j++;
            }
            if (j === stack.length) {
                count = 0;
            }
        }
        // console.log('count: ', count);
        // console.log('---------------')
        res.push(count);
        stack.shift();
    })
    console.log(res);
    return res;
    

};

var test = [73, 74, 75, 71, 69, 72, 76, 73]; 
test = [89, 62, 70, 58, 47, 47, 46, 76, 100, 70];
dailyTemperatures(test)
console.log([8, 1, 5, 4, 3, 2, 1, 1, 0, 0])