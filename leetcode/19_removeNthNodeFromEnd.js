/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    var h1 = head; 
    var h2 = head; 
    while (n-- > 0) h2 = h2.next
    if (!h2) return head.next;
    
   
    while (h2.next !== null) { 
        h1 = h1.next;  
        h2 = h2.next;
    }
    h1.next = h1.next.next;
    // console.log(head);
    return head;
    

};

var linkedlist = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}
removeNthFromEnd(linkedlist, 3)