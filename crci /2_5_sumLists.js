var sumLists = function(l1, l2) { 
    var dummyHead = { 
        val: null, 
        next: null
    }
    var current = dummyHead; 
    var carry = 0; 
    
    while (l1 || l2 || carry) { 
        var val1 = l1 ? l1.val : 0; 
        var val2 = l2 ? l2.val : 0;
        var sum = val1 + val2 + carry; 
        carry = Math.floor(sum / 10);
        current.next = { 
            val: sum % 10, 
            next: null
        } 
        current = current.next;  
        if (l1) l1 = l1.next; 
        if (l2) l2 = l2.next;
    }
    // console.log('dummyHead: ', dummyHead.next)
    var pre = null;  
    var cur = dummyHead.next; 
    var next = cur.next;
    while (cur !== null) { 
        next = cur.next; 
        cur.next = pre; 
        pre = cur; 
        cur = next;
    }
    
    return pre;
    // return dummyHead.next;
}
var l1 = {
    val: 7, 
    next: {
        val: 1, 
        next: { 
            val: 6, 
            next: null
        }
    }
}
var l2 = { 
    val: 5, 
    next: { 
        val: 9, 
        next: { 
            val: 2, 
            next: null
        }
    }
}
console.log(sumLists(l1, l2))