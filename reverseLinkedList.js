var reverse = (head) => { 
    var newHead = null;
    while (head) {
        var temp = head; 
        head = head.next; 

        if (!newHead) { 
            newHead = temp;
        } else { 
            temp.next = newHead;
            newHead = temp;
        }
    }
    return newHead;
}