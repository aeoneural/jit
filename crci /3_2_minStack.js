var StackWithMin = function() { 
    this.stack = [];
    this.minStack = [];
}
StackWithMin.prototype.push = function(value) { 
    if (value < this.min()) { 
        this.minStack.push(value)
    }
    this.stack.push(value);
}
StackWithMin.prototype.min = function() { 
    if (this.minStack.length === 0) { 
        return Math.pow(2, 31);
    } else { 
        return this.minStack[this.minStack.length - 1];
    }
}
StackWithMin.prototype.pop = function() { 
    var value = this.stack.pop();
    if (value === this.min()) { 
        this.minStack.pop();
    }
    return value;
}

