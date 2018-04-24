// get sizes and tail of each lists 
var getTailandSize = (list) => {
    if (list === null) return null;

    var size = 1;
    var current = list;
    while (current.next !== null) {
        size++;
        current = current.next;
    }
    // var obj = new Object();
    // obj.size = size; 
    // obj.tail = current;
    
    return { 
        'size': size, 
        'tail': current
    };
} 

var getKthNode = (head, k) => { 
    var current = head; 

    while (k > 0 && current !== null) { 
        current = current.next; 
        k--;
    }
    return current;
}
var getIntersectionNode = (l1, l2) => {
    
 
    var first = getTailandSize(l1);
    var second = getTailandSize(l2);
    if (first.tail !== second.tail) return null; 

    var longer = first.size > second.size ? l1 : l2;
    var shorter = first.size < second.size ? l1 : l2;
    

    // advance the pointer for longer list by difference in length
    longer = getKthNode(longer, Math.abs(first.size - second.size));
   
    
    while (longer !== shorter) { 
        shorter = shorter.next; 
        longer = longer.next;
    }
    return longer;
}
var same = {
    val: 3,
    next: {
        val: 2,
        next: null
    }
}
var l1 = {
    val: 1,
    next: {
        val: 6,
        next: same
    }
}
var l2 = {
    val: 4,
    next: {
        val: 5,
        next: { 
            val: 10, 
            next: same
        }
    }
}

console.log(getIntersectionNode(l1, l2));
var list1 
for (var i = 1; i < 41; i++) { 

}
