var addTwoNumbers = function(l1, l2, head) { 
    var dummyHead = { val: null, next: null};
    var curr = dummyHead; 
    var carry = 0; 

    while (l1 || l2 || carry) { 
        var val1 = val1 ? val1 : 0; 
        var val2 = val2 ? val2 : 0; 
        var sum = va1 + val2 + carry; 
        carry = Math.floor(sum / 10);
        curr.next = { val: Math.floor (sum % 10), next: null}
        if (l1) l1 = l1.next; 
        if (l2) l2 = l2.next;
    }
    return dummyHead.next;
}