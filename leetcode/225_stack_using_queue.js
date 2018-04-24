/**
 * Initialize your data structure here.
 */

var Node = function(x) { 
    this.val = x; 
    this.next = null;
}
var Queue = function() { 
    this._size = 0; 
    this.head = null; 
    this.tail = null;
}
Queue.prototype.enqueue = function(x) { 
    if (!this.head) { 
        this.head = new Node(x);
        this.tail = this.head;
    } else { 
        this.tail.next = new Node(x);
        this.tail = this.tail.next;
    }
    this._size++;
}
Queue.prototype.dequeue = function (x) {
    if(this.head) {
        var temp = this.head.val;
        this.head = this.head.next; 
        this._size--;
    }
    return temp;
}
Queue.prototype.size = function (x) {
    return this._size;
}
Queue.prototype.top = function(x) { 
    if (this.head) { 
        return this.head.val; 
    }
}

var MyStack = function () {
    this.queue = new Queue();
    this.queueTwo = new Queue();
    this.stack = [];
    this._size = 0; 
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue.enqueue(x);
    var size = this.queue.size();
    while (size > 1) {
        this.queue.enqueue(this.queue.dequeue());
        size--;
    }

};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this.queue.dequeue();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.queue.top();
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue.size() === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

var obj = new MyStack();
obj.push(5);
obj.push(6);
obj.push(7);
// var param_2 = obj.pop()
console.log(obj.pop());
// var param_3 = obj.top()
console.log(obj.top())
var param_4 = obj.empty()
console.log(param_4)