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
var mergeTwoLists = function(l1, l2) {
    var head = null;
    var tail = null;
    while (l1 && l2) { 
        var min; 
        if (l1.val < l2.val) { 
            min = l1;
            l1 = l1.next;
        } else { 
            min = l2; 
            l2 = l2.next;
        }
        if (head) { 
            tail.next = min;
            tail = tail.next;
        } else { 
            head = min; 
            tail = min; 
        }
    }
    var rest = l1 ? l1 : l2;
    if(head) { 
        tail.next = rest; 
        return head;
    } else { 
        return rest;
    }
};