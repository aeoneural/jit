/**
 * 538
 * @param {TreeNode} root
 * @return {TreeNode}
 * 
 * Strategy: do reversed inorder.
 */


var convertBST = function(root) {
    var arr = []
    var inorder = function(root, arr) { 
        if (!root) return; 
        inorder(root.left, arr);
        arr.push(root.val);
        inorder(root.right, arr);
    }
    inorder(root, arr);
    var sum = 0; 
    var convert = function(root) { 
        if (root) {
            convert(root.right);
            sum += arr.pop();
            root.val = sum; 
            convert(root.left)
        }
    }
    convert(root)
    return root

}
var tree = {
    val: 5,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 13,
        left: null,
        right: null
    }
}
console.log(convertBST(tree));
// console.log(rightSum(tree))