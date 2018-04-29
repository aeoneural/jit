/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    var sum = 0; 
    var last = [];
    var i = 0; 
    for (var i = 0; i < ops.length; i++) { 
        if (ops[i] === '+') {
            if (last.length === 1) { 
                ops.push(last[0] + sum);
            } else { 
                last.push(last[last.length - 1] + last[last.length - 2])
            }  
        } else if (ops[i] === 'D')  {
            last.push(last[last.length - 1] * 2)  
        } else if (ops[i] === 'C') { 
            sum -= last.pop();    
        } else { 
            last.push(+ops[i]);
        } 
        // console.log('last: ', last)
        // console.log('updated num: ', sum)
    }
    sum = last.reduce((element, ac) => { return ac += element }, 0)
    return sum;
};
console.log(calPoints(["5", "2", "C", "D", "+"]))

// console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]))
// console.log(calPoints(["1", "C", "-62", "-45", "-68"]))
// console.log(calPoints(["36", "28", "70", "65", "C", "+", "33", "-46", "84", "C"]))