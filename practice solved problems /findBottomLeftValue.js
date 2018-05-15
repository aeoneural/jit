var findBottomLeftValue = function(root) { 
    // to find the bottom left value of a tree, we need to traverse the tree, level by level 
    if (!root) return 
    var queue = [root];
    var indexToExpand = 0; 
    var currentLayerSize = 1; 
    var res;
    while (indexToExpand < queue.length) { 
        var nextLayerSize = 0; 
        
        for (var i = 0; i < currentLayerSize; i++) { 
            var currentNode = queue[indexToExpand++];
            res = currentNode.val; 
            if (currentNode.right) { 
                queue.push(currentNode.right);
                nextLayerSize++
            } 
            if (currentNode.left) { 
                queue.push(currentNode.left);
                nextLayerSize++;
            }
        }
        currentLayerSize = nextLayerSize;
    }
    console.log(res);
    return res;
 
}

var tree = { 
    val: 5, 
    left: { 
        val: 4, 
        left: { 
            val: 3, 
            left: null, 
            right: null
        }, 
        right: null
    }, 
    right: { 
        val: 6, 
        left: null, 
        right: null
    }
}
console.log(tree);
findBottomLeftValue(tree);