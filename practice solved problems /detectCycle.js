// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.


var detectCycle = function(head) { 
    var slow = head; 
    var fast = head; 
    var cycle = false;
    do { 
        slow = slow.next; 
        fast = fast.next.next;
    } while (slow !== fast)
    if (slow !== fast) { 
        return null;
    }
    slow = head; 
    while (slow !== fast) {
        slow = slow.next; 
        fast = fast.next;
    }
    return slow;

}