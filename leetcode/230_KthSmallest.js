/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var inorderTraversal = (root, arr) => { 
    if (!root) return; 
    inorderTraversal(root.left, arr); 
    arr.push(root.val); 
    inorderTraversal(root.right, arr)
}
var kthSmallest = function(root, k) {
    var arr = [0];
    inorderTraversal(root, arr); 
    return arr[k]
};