/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root) return null; 
    if (root === p || root === q) return root; 
    var left = lowestCommonAncestor(root.left, p, q); 
    var right = lowestCommonAncestor(root.right, p, q); 
    if (left && right) { 
        return root; 
    }
    return (left !== null) ? left : right;
};
var tree = { 
    val: 3, 
    left: { 
        val: 5, 
        left: { 
            val: 6, 
            left: null, 
            right: null 
        }, 
        right: {
            val: 2,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 4,
                left: null,
                right: null
            }
        }
    }, 
    right: {
        val: 1,
        left: {
            val: 0,
            left: null,
            right: null
        },
        right: {
            val: 8,
            left: null,
            right: null
        }
    }
}
lowestCommonAncestor(tree, 7, 8)