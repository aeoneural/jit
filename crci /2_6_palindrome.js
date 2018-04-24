var isLinkedListPalindrome = (head) => { 

    var fast = head; 
    var slow = head; 

    while (fast !== null && fast.next !== null) {
        slow = slow.next; 
        fast = fast.next.next; 
    }

    // for odd number
    if (fast !== null) slow = slow.next;

    // reverse slow 
    var prev = null; 
    var cur = slow; 
    var next = null; 
    while (cur !== null) { 
        next = cur.next; 
        cur.next = prev;
        prev = cur; 
        cur = next;
    }

    fast = head;
    while (prev) {  
        if (fast.val !== prev.val) return false;
        fast = fast.next;
        prev = prev.next;
    }
    return true;
    

    
}

var linkedlist = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 2,
                next: { 
                    val: 1, 
                    next: null
                }
            }
        }
    }
}
var res = isLinkedListPalindrome(linkedlist)
console.log(res);