var Node = function(val) { 
    this.val = val, 
    this.next = null
}
var linkedList = function () {
    this.head = null;
    this.tail = null;
}
linkedList.prototype.add = function(val) { 
    var newNode = new Node(val);
    if (!this.head) { 
        this.head = newNode;
        this.tail = newNode;
    } else { 
        this.tail.next = newNode; 
        this.tail = newNode;
    }
}
var listOfAllDepths = function(rootNode) { 
    var result = [];
    var queue = [rootNode];
    var currentIndex = 0; 
    var currentLayerSize = 1; 
    while (currentIndex < queue.length) { 
        var nextLayerSize = 0; 
        var newlist = new linkedList();
        for (var i = 0; i < currentLayerSize; i++) {
            var currentNode = queue[currentIndex++];
            // console.log("current node: ", currentNode)
            newlist.add(currentNode.val);
            if (currentNode.left !== null) { 
                queue.push(currentNode.left);
                nextLayerSize++;
            } 
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
                nextLayerSize++;
            }
        }
        result.push(newlist)
        currentLayerSize = nextLayerSize;
    }
    return result;
}
var tree = { 
    val: 1, 
    left: { 
        val: 2, 
        left: null, 
        right: null, 
    }, 
    right: { 
        val: 3, 
        left: { 
            val: 4,
            left: null, 
            right: null
        }, 
        right: null
    }
}
var output = listOfAllDepths(tree); 
// var head = output.head 
// while (head !== null) { 
//     console.log(head.val)
//     head = head.next;
// }

console.log(output)