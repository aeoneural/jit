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
    var stack = [root];
    
    while (stack.length > 0) {
        var node = stack.pop();
        console.log('current node: ', node);
        var left = node.left; 
        node.left = node.right; 
        node.right = left; 
        if (node && node.left) {
            stack.push(node.left);
        }
        if (node && node.right) { 
            stack.push(node.right);
        }
    }
   return root
};
var tree = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}
// console.log(invertTree(tree))
var print = (root) => {
    if (!root) return;
    print(root.left);
    console.log(root.val)
    print(root.right);
}
print(tree)
console.log('new')
console.log(invertTree(tree))