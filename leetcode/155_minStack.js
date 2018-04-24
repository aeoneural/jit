/**
 * initialize your data structure here.
 */

var MinStack = function() {
    this.stack = [];
    this.min = Math.pow(2, 31) - 1;
    this.first = Math.pow (2,31) - 2;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {

    if (this.min > x) { 
        this.min = x; 
    }
    var temp = this.min;
    this.stack.push({val: x, min: temp});
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // console.log(this.stack.pop().val)
    return this.stack.pop().val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // console.log(this.stack[0].val);
    return this.stack[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // console.log(this.stack[this.stack.length - 1].min);
    return this.stack[this.stack.length-1].min;
};

MinStack.prototype.isEmpty = function() { 
    return this.stack.length === 0;
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
 var obj = new MinStack();
 obj.push(2)
 obj.push(0)
 obj.push(3)
 obj.push(0)
 var param_4 = obj.getMin()
console.log('min:', param_4)
console.log(obj.pop())
console.log(obj.getMin())
console.log(obj.pop())
console.log(obj.getMin())
console.log(obj.pop())
console.log(obj.getMin())
//  obj.pop()
//  var param_3 = obj.top()

 
