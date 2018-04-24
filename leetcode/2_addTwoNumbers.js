/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var linkNode = function(val) { 
    this.val = val; 
    this.next = null;
}
var linkedlist = function() { 
    this.head = null; 
    this.tail = null;
}
linkedlist.prototype.insert = function(val){ 
    if (this.head) { 
        this.tail = new linkNode(val); 
        this.tail.next = this.tail;
    } else { 
        this.head = new linkNode(val); 
        this.tail = this.head;
    }
}
var addTwoNumbers = function(l1, l2) {
    var dummyHead = {val: null, next: null}; 
    let curr = dummyHead; 
    let carry = 0; 
    
    while (l1 || l2 || carry) { 
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0; 
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum/10); 
        curr.next = {val: Math.floor(sum%10), next: null};
        curr = curr.next; 
        if (l1) l1 = l1.next; 
        if (l2) l2 = l2.next;  
    }
    console.log(dummyHead.next)
    return dummyHead.next; 
};


addTwoNumbers({ val: 4, next: { val: 4, next: { val: 4, next: null } } }, { val: 4, next: { val: 4, next: { val: 2, next: null } } } )