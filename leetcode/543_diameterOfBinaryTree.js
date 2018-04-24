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
var diameterOfBinaryTree = function (root) {

    // find the longest path for left and right 
    // update global max with (left + right);
    var max = 1; 

    var getMax = (root) => {
        if (!root) {
            return 0;
        }
        var left = getMax(root.left);
        var right = getMax(root.right);
        max = Math.max(left + right, max)
        return Math.max(left, right) + 1;

    }
    getMax(root);
    return max;
};

var tree = { 
    val: 5, 
    left: { 
        val: 4,
        left: null,
        right: null
    }, 
    right: { 
        val: 6,
        left: {
            val: 3, 
            left: null, 
            right: null
        },
        right: null

    }
}
console.log(diameterOfBinaryTree(tree));
