/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
Given a binary tree, write a function to get the maximum width of the given tree. The width of a tree is the maximum width among all levels. The binary tree has the same structure as a full binary tree, but some nodes are null.
The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, where the null nodes between the end-nodes are also counted into the length calculation.
 * @param {TreeNode} root
 * @return {number}
 */
var levelOrderBottom = function (root) {
    if (!root) { return; }
    var finalResult = []
    var result = []
    var queue = [root];
    var nodetoexpand = 0;
    var sizeofcurrentlayer = 1;
    while (nodetoexpand < queue.length) {
        var layer = [];
        var sizeofnextlayer = 0;
        for (var i = 0; i < sizeofcurrentlayer; i++) {
            var currentNode = queue[nodetoexpand++];
            layer.push(currentNode ? currentNode.val : null );
            if (currentNode) {
                queue.push(currentNode.left);
                queue.push(currentNode.right);
            } 
        }
        
        result.push(layer);
        sizeofcurrentlayer *= 2
        // sizeofcurrentlayer = sizeofnextlayer;
    }

    for (var i = 0; i < result.length; i++) {
        finalResult.push(result[result.length - i - 1]);
    }
    // console.log("hello: ", finalResult);
    return finalResult;
};
var levelOrderLastTry = (root) => { 
    var q = [root];
    var count = [];
    var indexToExpand = 0; 

}
var levelOrder = (root) => { 
    if (!root) return 0; 
    var q = [root];
    var max = 0; 

    while (q.length > 0) { 
        var count = q.length; 
        max = Math.max(count, max);
        while (count !== 0) { 
            count--; 
            var temp = q[0]
            q.shift();
            if (temp.left) { 
                q.push(temp.left);
            }
            if (temp.right ) { 
                q.push(temp.right);
            }
        }
    }
    return max;   
}

var tree = { 
    val: 1, 
    left: {
        val: 2, 
        left: {
            val: 4,
            left: null,
            right: null
        }, 
        right: {
            val: 5,
            left: null,
            right: null
        }
    }, 
    right: {
        val: 3,
        left: null,
        right: {
            val: 8,
            left: {
                val: 6,
                left: null,
                right: null
            },
            right: {
                val: 7,
                left: null,
                right: null
            }
        }
    }
}
console.log(levelOrder(tree));