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
var sumOfLeftLeaves = function(root) {
    var all = 0
    var traverse = function(node) { 
        if (!node) return; 
        if (node.left) { 
            all += node.left.val
        }
        traverse(node.left);
        traverse(node.right); 
    }
    traverse(root);
    return all;
};
var tree = { 
    val: 3,
    left: { 
        val: 9, 
        left: null, 
        right: null
    }, 
    right: { 
        val: 20,  
        left: { 
            val: 15, 
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
console.log(sumOfLeftLeaves(tree));