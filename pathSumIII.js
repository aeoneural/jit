/**
 * 437
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var dfs = (root, sum) => { 
    if (!root) return 0; 
    return (root.val === sum ? 1 : 0) + dfs(root.left, sum - root.val) + dfs(root.right, sum - root.val)
}
var pathSum = function(root, sum) {
    if (!root) return 0; 
    return dfs(root, sum) + dfs(root.left, sum) + dfs(root.right, sum);
};
var tree = { 
    val: 10, 
    left: { 
        val: 5,
        left: {
            val: 4,
            left: null, 
            right: {
                val: -2,
                left: null, 
                right: null
            }
        }, 
        right: null
    }, 
    right: {
        val: 1,
        left: null,
        right: {
            val: -4,
            left: null,
            right: null
        }
    }
}
console.log(pathSum(tree, 7));