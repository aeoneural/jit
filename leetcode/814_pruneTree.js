/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
    if (!root) return null; 
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);
    return (root.val === 1 || root.left !== null || root.right !== null) ? root : null
};

var tree = { 
    val: 1,
    left: { 
        val: 1,
        left: { 
            val: 1,
            left: {
                val: 0,
                left: null, 
                right: null
            },
            right: null
        },
        right: { 
            val: 1, 
            left: null, 
            right: null
        }
    },
    right: {
        val: 0,
        left: {
            val: 0,
            left: null,
            right: null
        },
        right: {
            val: 0,
            left: null,
            right: null
        }
    }
}
console.log('original tree: ', tree);
console.log(pruneTree(tree));