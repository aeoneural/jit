/**
 * 563
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
var findTilt = function (root) { 
    var result = 0; 
    var rec = (root) => { 
        if (!root) return 0; 
        var left = rec(root.left); 
        var right = rec(root.right);
        result += Math.abs(left - right); 
        return root.val + left + right;
    }
    rec(root);
    return result;
};
var tree = { 
    val: 1, 
    left: { 
        val: 2, 
        left: null, 
        right: { 
            val: 3, 
            left: null, 
            right: null
        }
    }, 
    right: { 
        val: 4, 
        left: null, 
        right: { 
            val: 6, 
            left: null, 
            right: null
        }
    }
}

console.log(findTilt(tree))