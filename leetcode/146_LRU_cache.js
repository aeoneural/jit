/* 
Strategy Summary: 
    Keep a stack with size of input
    if set value is not present in the memory (stack), unshift (pop from front) and push input value.
    else, remove the current value from stack, and push it again at the end. 

Big O: 
    set - O(n) as each time it has to find index of value in stack 
    get - O(1) as it's hashtable

Transformation Steps: 
    Input (LRUCache(2)) - Output 
    LRUCache.set(1) [1]
    LRUCache.set(3) [1,3]
    LRUCache.get(1) 1 
    LRUCache.set(4) [3,4] - evitcs 1
    LRUCache.set(3) [4,5] - updates it as most recently used 

*/

var LRUCache = function (capacity) {
    this.size = 0; 
    this.map = {}; 
    this.head = null; 
    this.tail = null; 
    this.limit = capacity; 
};
LRUCache.prototype.node = function(key, value) {
    if(typeof key !== 'undefined' && key !== null) { 
        this.key = key; 
    }
    if(typeof value !== 'undefined' && value !== null){ 
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
LRUCache.prototype.remove = function(key) { 
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

LRUCache.prototype.put = function (key, value) {
   var node = new LRUCache.prototype.node(key, value); 
   if (this.map[key]) { 
       this.map[key].value = node.value; 
       this.remove(node.key); 
   } else { 
       if (this.size >= this.limit) { 
           delete this.map[this.tail.key]; 
           this.size--; 
           this.tail = this.tail.prev; 
           if (this.tail !== null) { 
               this.tail.next = null; 
           }
           
       } 
   }
   this.setHead(node);

};

var Node = function(data) { 
    this.value = data; 
    this.next = null; 
    this.prev = null; 
}
var DoublyLinkedList = function () {
    this.head = null;
    this.tail = null;
}
DoublyLinkedList.prototype.add = function (data) {
    var node = new Node(data);
    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        node.previous = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
}

var test = new DoublyLinkedList(); 
test.add(2)
test.add(5)
test.add(6)
// console.log('test: ', test)
var a = new LRUCache()
console.log(a.put(1));
console.log(a.put(2,1));
console.log(a.put(2));
console.log(a.put(3,2))
console.log(a.put(2))
console.log(a.put(3))


// console.log(a.get(2))
// console.log(a.get(3))
// console.log(a.get(4))
// console.log(a.put(4,4))
// console.log(a.get(4))