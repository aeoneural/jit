var maxDepth = (root) => { 
    if (!root) return 0; 
    var queue = [root];
    var indexToExpand = 0; 
    var currentLayerSize = 1; 

    var currentLayer = 0; 

    while (indexToExpand < queue.length) { 
        
        var sizeOfNextLayer = 0; 
        for (var i = 0; i < sizeOfNextLayer; i++) { 
            var currentNode = queue[indexToExpand++];
            if (currentNode.left) { 
                queue.push(currentNode.left);
                sizeOfNextLayer++
            }
            if (currentNode.right) { 
                queue.push(currentNode.right);
                sizeOfNextLayer++
            }
        }
        currentLayer++;
        currentLayerSize = sizeOfNextLayer;
    }
    return currentLayer;
}