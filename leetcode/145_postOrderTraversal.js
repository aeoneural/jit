/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    var arr = []; 
    function traverser (root, arr){
        if (!root) return;
        traverser(root.left, arr); 
        traverser(root.right, arr);
        arr.push(root.val);
    }
    traverser(root, arr);
    return arr;
};
var tree = { 
    val: 3, 
    left: { 
        val: 2, 
        left: null, 
        right: {
            val: 1, 
            left: null, 
            right: null
        }
    }, 
    right: { 
        val: 4, 
        left: null, 
        right:null
    }
}
var test = postorderTraversal(tree); 
console.log(test);