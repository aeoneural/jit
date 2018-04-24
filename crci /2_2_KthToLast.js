var printKthToLast = (head, k) => { 
    var p1 = head; 
    var p2 = head; 
    for (var i = 0; i < k; i++) {
        if (p1 === null) return null;
        p1 = p1.next;
    }

    while (p1 !== null) {
        p1 = p1.next; 
        p2 = p2.next;
    }
    return p2; 
}
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
for (var i = 1; i <= 4; i++) {
    console.log(printKthToLast(linkedlist, i));
}