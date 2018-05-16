var removeNthFromEnd = function(head, n) { 
    var h1 = head; 
    var h2 = head; 

    while (n-- > 0) h2 = h2.next; 
    if (!h2) return head.next; 

    while (h2.next !== null) {
        h1 = h1.next; 
        h2 = h2.next; 
    }
    h1.next = h1.next.next;
    return head;
}