var Queue = function() { 
    this.arr = [];
}
Queue.prototype.enqueue = function(val) { 
    this.arr.push(val);
}
Queue.prototype.dequeue = function() { 
    return this.arr.shift();
}
Queue.prototype.peek = function() { 
    return this.arr[0]; 
}
Queue.prototype.size = function() { 
    return this.arr.length;
}

var BFS = function(root) { 
    if (!root) return; 
    var finalResult = [];
    var result = [];
    var queue = new Queue();
    queue.enqueue(root);
    var endRes = [];
    while (queue.size() > 0) { 
        var layer = [];
        var size = queue.size()
        for (var i = 0; i < size; i++) { 
            var currentNode = queue.dequeue(); 
            layer.push(currentNode.val);
            if (currentNode.left) { 
                queue.enqueue(currentNode.left);
            }
            if (currentNode.right) { 
                queue.enqueue(currentNode.right);
            }
        }
        console.log('queue:', queue);
        endRes.push(layer);
    }
    console.log(endRes);
    return endRes;
}


var bfsStack = function (root) {
    if (!root) { return; };
    var finalResult = [];
    var result = [];
    var queue = [root];
    var nodetoexpand = 0;
    var sizeofcurrentlayer = 1;

    while (nodetoexpand < queue.length) {
        var layer = [];
        var sizeofnextlayer = 0;
        for (var i = 0; i < sizeofcurrentlayer; i++) {
            var currentNode = queue[nodetoexpand++];
            layer.push(currentNode.val);
            if (currentNode.left) {
                queue.push(currentNode.left);
                sizeofnextlayer++;
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
                sizeofnextlayer++;
            }
        }
        console.log('layer: ', layer);
        result.push(layer);
        sizeofcurrentlayer = sizeofnextlayer
    }
    console.log(result);

}

var dfsRec = function(root, str) { 
    if (!root) return; 
    console.log(root.val); 

    if (root.left) { 
        dfsRec(root.left);
    }
    if (root.right) { 
        dfsRec(root.right);
    }
}

var dfsStack = function(root) { 
    var stack = [root];
    console.log('dfs in stack')
    while (stack.length > 0) { 
        var currenNode = stack.pop();
        console.log(currenNode.val);
        if (currenNode.right) { 
            stack.push(currenNode.right);
        }
        if (currenNode.left) { 
            stack.push(currenNode.left);
        }
    }
}
var test = {    val: 1, 
                left: { val: 2, 
                        left: null, 
                        right: { 
                                val: 3, 
                                left: { val: 4, 
                                        left: null, 
                                        right: null }, 
                                right: { 
                                    val: 5, 
                                    left: null, 
                                    right: null } } 
                                }, 
                right: { 
                    val: 7, 
                    left: null, 
                    right: null
                } }
// BFS(test);
// bfs1(test);
dfsRec(test, '');
dfsStack(test);