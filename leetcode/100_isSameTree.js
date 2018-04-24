/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) { 
        return true; 
    } 
    if (!p || !q) { 
        return false; 
    }
    if (p.val !== q.val) { 
        return false; 
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// console.log(isSameTree({ val: 5, right: null, left: null }, { val: 6, right: null, left: null } ))
// [10,5,15]
// [10, 5, null, null, 15]
var t1 = { val: 10, left: { val: 5, left: null, right: null }, right: { val: 15, left: null, right: null}}

var t2 = {   
    val: 10, 
    left: { val: 5, 
            left: null, 
            right:  {val: 15, left: null, right: null} }, 
    right: null 
}
console.log(isSameTree(t1, t2))
