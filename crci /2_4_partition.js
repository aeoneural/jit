var partition = (node, n) => { 
    var leftStart = null; 
    var leftEnd = null;
    var rightStart = null; 
    var rightEnd = null; 

    while (node) { 
        if (node.val < n) { 
            if (leftStart === null) { 
                leftStart = node; 
                leftEnd = leftStart;
            } else { 
                leftEnd.next = node; 
                leftEnd = node;
            }
        } else { 
            if (rightStart === null) { 
                rightStart = node; 
                rightEnd = rightStart;
            } else { 
                rightEnd.next = node; 
                rightEnd = node;
            }
        }
        node = node.next;
    }
    if (leftStart === null) return rightStart;
    leftEnd.next = rightStart;
    return leftStart;
}
var linkedlist = {
    val: 3,
    next: {
        val: 5,
        next: {
            val: 8,
            next: {
                val: 5,
                next: { 
                    val: 10, 
                    next: { 
                        val: 2, 
                        next: null
                    }
                }
            }
        }
    }
}
var a = partition(linkedlist, 5)

console.log(a)