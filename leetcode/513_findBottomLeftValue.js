/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValueShorter = function (root) {
    const q = [root], ary = 0;
    while (q.length) {
        let node = q.shift();
        res = node.val
        if (node.right) q.push(node.right);
        if (node.left) q.push(node.left);
    }
    return ary;
};
var findBottomLeftValue = function(root) { 
    var result = 0;
    var queue = [root];
    var nodetoexpand = 0;

    while (nodetoexpand < queue.length) {
        var currentNode = queue[nodetoexpand++];
        result = currentNode.val
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    return result;
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
var test = findBottomLeftValue(tree);
console.log(test);