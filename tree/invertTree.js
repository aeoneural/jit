/**
 * 226
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    var arr = [];
    var inOrder = (root, arr) => { 
        if (!root) return;
        inOrder(root.left);
        arr.push(root.val);
        inOrder(root.right);
    }
    var modify = (root, arr) => { 
        if (!root) return ;
        modify(root.left);
        root.val = arr.pop();
        modify(root.right);
    }
    inOrder(root, arr);
    modify(root, arr);
    return root;
};
var tree = {
    val: 5,
    left: {
        val: 3,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 6,
        left: null,
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}
console.log(invertTree(tree))