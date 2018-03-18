/**
 * 235
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * a node itself can be an ancestor of itself
 * 
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 
 * strategy: 
 *           10 
 *         /    \ 
 *        7       12 
 *          \     /  \ 
 *           8   11    13
 */
var lowestCommonAncestor = function (root, p, q) {
    if (root.val > Math.max(p.val, q.val)) { 
        return lowestCommonAncestor(root.left, p, q);
    } else if (root.val < Math.min(p.val, q.val)) { 
        return lowestCommonAncestor(root.right, p, q);
    } else { 
        return root
    }
};

var tree = { 
    val: 10, 
    left: { 
        val : 7, 
        left: null, 
        right: { 
            val: 8, 
            left: null, 
            right: null
        }
    }, 
    right: { 
        val: 12, 
        left: { 
            val: 11, 
            left: null, 
            right: null
        }, 
        right: { 
            val: 13, 
            left: null, 
            right: null
        }
    }
}
console.log(lowestCommonAncestor(tree, {val: 7}, {val:8}))