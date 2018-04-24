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
var minDiffInBST = function(root) {
    var prev = null
    // var cur = null
    var min = Math.pow(2, 31);
    var inorder = function (root) {
        if (!root) return;
        inorder(root.left);

        if (prev !== null) { 
            if (min > root.val - prev) { 
                min = root.val - prev; 
            }
        } 
        prev = root.val;
        inorder(root.right);
    }
    inorder(root); 
    return min;
};
var tree = {
    val: 3.8,
    left: {
        val: 2.9,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: 6,
        left: null,
        right: null
    }
}
console.log(minDiffInBST(tree));
