var removeDups = (head) => { 
    var hashTable = {}; 
    var prev = null;
    while (head !== null) { 
        if (!hashTable.hasOwnProperty(head.val)) { 
            hashTable[head.val] = 1;
            prev = head; 
        } else { 
            prev.next = head.next;
        }
        head = head.next;
    }
}

var linkedlist = { 
    val: 4, 
    next: { 
        val: 4, 
        next: { 
            val:3, 
            next: null
        }
    }
}
removeDups(linkedlist)
console.log(linkedlist)