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

var findTilt = function(root) {
    var total = 0
    var traverse = (rootNode) =>  { 
        if (!rootNode) return 0; 
        var left = traverse(rootNode.left); 
        var right = traverse(rootNode.right);
        total += Math.abs(left - right);
        return rootNode.val + left + right;
    }
    traverse(root, 0);  
    return total;
};

var tree = { 
    val: 1, 
    left: {
        val: 2, 
        left: null, 
        right: null
    },
    right: { 
        val: 3, 
        // left: {
        //     val: 4, 
        //     left: null, 
        //     right: null
        // }, 
        left: null,
        right: null
    }
}
console.log(findTilt(tree));