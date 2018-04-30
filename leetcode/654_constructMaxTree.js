/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var TreeNode = function(val) { 
    this.val = val; 
    this.left = null;
    this.right = null;
}
var constructMaximumBinaryTree = function(nums) {
    return construct(nums, 0, nums.length);
};
var construct = function(nums, l, r) { 
    if ( l > r) return null; 
    var maxI = l;
    for (var i = l + 1; i <= r; i++) {
        if (nums[maxI] < nums[i]) {
            maxI = i;
        }
    }
    var root = new TreeNode(nums[maxI]);
    // root.val = nums[maxI];
    root.left = construct(nums, l, maxI - 1); 
    root.right = construct(nums, maxI + 1, r); 
    return root
}

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));