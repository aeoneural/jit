/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.size = 0
    this.head = new Node(0, 0)
    this.tail = new Node(1, 1)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.nodes = {}
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!(key in this.nodes)) {
        return -1
    }
    const node = this.nodes[key]
    node.prev.next = node.next
    node.next.prev = node.prev

    node.next = this.head.next
    node.prev = this.head
    node.next.prev = node
    node.prev.next = node
    return node.value
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let node = null
    if (key in this.nodes) {
        node = this.nodes[key]
        node.value = value
        node.prev.next = node.next
        node.next.prev = node.prev
    } else {
        if (this.size === this.capacity) {
            const key = this.tail.prev.key
            this.tail.prev = this.tail.prev.prev
            this.tail.prev.next = this.tail
            delete this.nodes[key]
        } else {
            this.size++
        }
        node = new Node(key, value)
        this.nodes[key] = node
    }
    node.next = this.head.next
    this.head.next = node
    node.prev = this.head
    node.next.prev = node
};

class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.prev = this.next = null
    }
}