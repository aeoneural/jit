var sortStack = function(stack) { 
    var r = [];
    while (stack.length !== 0) {
        var tmp = stack.pop();
        while (r.length !== 0 && r[r.length - 1] < tmp) { 
            stack.push(r.pop());
        }
        r.push(tmp);
    }

    // copy elements from r back to s. 
    while (r.length !== 0) { 
        stack.push(r.pop());    
    }
    return stack;
}

var a = [1,2,3,4,10]
console.log(sortStack(a));
