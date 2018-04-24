/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var reverse = function(head) { 
    var current, prev, next; 
    current = head; 
    prev = null; 
    while (current !== null) { 
        next = current.next; 
        current.next = prev; 
        prev = current;
        current = next; 
    }
    return prev;
}
var isPalindrome = function (head) {
    var slow = head; 
    var fast = head;
    var rev = slow;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    console.log('hi fast: ', fast);
    if (fast) {
        slow = slow.next;
    }
    slow = reverse(slow);
    console.log('slow: ', slow);
    fast = head;
    while (slow) { 
        if (fast.val !== slow.val)  {
            return false;
        }
        fast = fast.next;
        slow = slow.next;
    }
    return true;
};

var test = {val : 1, next: {val: 0, next: {val: 3, next: {val: 2, next: {val: 1, next: null}}}}}; 
var a = isPalindrome(test); 
console.log(a);