var Queue = function() { 
    this.inbox = [];
    this.outbox = [];
}
Queue.prototype.enqueue = function(input) { 
    this.inbox.push(input);

}
Queue.prototype.dequeu = function() { 
    if (this.outbox.length === 0) { 
        while (this.inbox.length > 0) {
            this.outbox.push(this.inbox.pop());
        }
        if (this.outbox.length === 0) { 
            return undefined
        }
    } 
    return this.outbox.pop();
}

var test = new Queue(); 

for (var i = 1; i < 6; i++) { 
    test.enqueue(i);
}
for (var i = 1; i < 8; i++) { 
    console.log(test.dequeu());
    console.log(test);
}
console.log(test);