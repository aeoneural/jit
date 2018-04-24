/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    var all = []
    var rec = function(root, each) { 
        if (root) { 
            if (!root.left && !root.right) {
                each += root.val;
                all.push(each);
                return;
            }
            each += (root.val + '->')
            rec(root.left, each);
            rec(root.right, each);
        } 
    }
    rec(root, '')
    return all;
};
var a = {val: 1, left: {val: 2, left: null, right: {val: 5, right: null, left: null}}, right: {val: 3, left: null, right: null}}
console.log(binaryTreePaths(a)); 