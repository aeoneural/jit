var largestValues = function(root) {

    if (!root) { return; };
    var finalResult = [];
    var queue = [root];
    var nodetoexpand = 0;
    var sizeofcurrentlayer = 1;

    while (nodetoexpand < queue.length) {
        var layer = [];
        var max = -Math.pow(2, 31);
        var sizeofnextlayer = 0;
        for (var i = 0; i < sizeofcurrentlayer; i++) {
            var currentNode = queue[nodetoexpand++];
            max = Math.max(max, currentNode.val);
            if (currentNode.left) {
                queue.push(currentNode.left);
                sizeofnextlayer++;
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
                sizeofnextlayer++;
            }
        }
        finalResult.push(max);
        sizeofcurrentlayer = sizeofnextlayer
    }
    return finalResult;
};
var largestValuesRec = function(root) { 
    var arr = []
    var bfs = function(root, level) { 
        if (!root) return;
        arr[level] = Math.max(arr[level] === undefined ? -Math.pow(2, 31) : arr[level], root.val); 
        bfs(root.left, level + 1); 
        bfs(root.right, level + 1);
    }
    bfs(root, 0)
    return arr;
}
var tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: 3,
        left: {
            val: 5,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    }
}
console.log(tree);
var test = largestValuesRec(tree);
console.log(test);