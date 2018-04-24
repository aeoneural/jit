/**
 * @param {string} s
 * @return {boolean}
 */

// Iterate over each element, if current element is
    // opening bracket, append it to a stack. 
    // closing bracket, check if it is pair of last element in the stack 
// if stack is empty return true, else false. 

// var input = ['{()}{]']
// var stack = []
// input[0] is opening, append stack['{']
// input[1] is opening, append stack['{(']
// input[2] is closing, check stack.pop() '(' is pair of ')' yes, updated stack = ['{']
// input[3] is closing, check stack.pop() '{' is pair of '}' yes, updated stack = []
// input[4] is opening, append stack['{']
// input[5] is closing, check stack.pop() '{' is pair of ']' no, so this input is not valid, thus returns false.
// output: false 

var isValid = function (s) {
    if (s.length %2 ) { 
        return false
    }
    var stack = [];
    var openingBrackets = new Set(['{', '[', '(']);
    var pairs = {'}':'{',']':'[', ')':'('};
    for (var i = 0; i < s.length; i++) { 
        if (openingBrackets.has(s[i])) { 
            stack.push(s[i]);
        } else { 
            if (stack.length === 0) {
                return false;
            }
            var lastElement = stack.pop();
            if (pairs[s[i]] !== lastElement) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
var a = isValid("({})")
console.log(a)
