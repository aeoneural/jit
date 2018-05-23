/* 
Strategy: 
    keep a stack with size of input 
    if set value is not present in the memory (stack), pop from the front and push input value 
    else, remove the current value from stack, and push it again at the end 

*/
var LRUCache = function (capacity) {
    this.size = 0;
    this.map = {};
    this.head = null; 
    this.tail = null;
    this.limit = capacity | 0; 
};
LRUCache.prototype.node = function(key, value) { 
    if (typeof key !== 'undefined' && key !== null) { 
        this.key = key; 
    }
    if (typeof value !== 'undefined' && value !== null) {
        this.value = value;
    }
    this.prev = null; 
    this.next = null;
}
// update the new head - most recently accessed item in the memory 
LRUCache.prototype.setHead = function(node) { 
    node.next = this.head; 
    node.prev = null;
    if (this.head !== null) { 
        this.head.prev = node;
    }
    this.head = node; 
    if (this.tail === null) { 
        this.tail = node;
    }
    this.size++;
    this.map[node.key] = node;
}

LRUCache.prototype.get = function (key) {
    if (this.map[key]) {
        var value = this.map[key].value;
        var node = new LRUCache.prototype.node(key, value);
        this.remove(key);
        this.setHead(node);
        return value;
    } else {
        return -1;
    }
};

LRUCache.prototype.set = function (key, val) {
    var newNode = new LRUCache.prototype.node(key, val); 
    console.log('new node: ', newNode)
    if (this.map.hasOwnProperty(key)) { 
        console.log('hello:', this.map[key])
        this.map[key].value = newNode['value'];
        this.remove(newNode.key);
    } else { 
        if (this.size >= this.limit) { 
            delete this.map[this.tail.key]; 
            this.size--;
            this.tail = this.tail.prev; 
            if (this.tail) {
                this.tail.next = null
            }
        }

    }

    this.setHead(newNode);
};

LRUCache.prototype.remove = function(key) { 
    console.log('debugging: ')
    var node = this.map[key];
    if (node.prev !== null) {
        node.prev.next = node.next;
    } else {
        this.head = node.next;
    }
    if (node.next !== null) {
        node.next.prev = node.prev;
    } else {
        this.tail = node.prev;
    }
    
    delete this.map[key];
    this.size--; 
}

var test = new LRUCache(5);

console.log(test.get(0))
test.set('aygerim', 'good');
test.set('tunay', 'excellent');
test.set('together', 'even better')
console.log(test);