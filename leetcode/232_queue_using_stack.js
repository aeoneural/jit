var Stack = function() { 
   this.stack = []; 
   this._size = 0;
}
Stack.prototype.push = function(x) { 
    this.stack.push(x);
    this._size++;
}
Stack.prototype.pop = function () {
    if (!this.empty()) { 
        this._size--;
        return this.stack.pop();
    }
}
Stack.prototype.peek = function () {
    return this.stack[this.stack.length-1];
}
Stack.prototype.empty = function () {
    return this._size === 0; 
}

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.input = new Stack();
    this.output = new Stack();
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.input.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.peek();
    this.output.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.output.empty()) {
        while(!this.input.empty()) { 
            this.output.push(input.pop());
        }
        return this.output.peek();
    }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.input.empty() && this.output.empty()
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// var obj = new Queue(); 

