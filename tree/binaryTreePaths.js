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
    var result = [];

    var dfs = (root, result, onePath) => { 
        if (root) {
            if (!root.left && !root.right) { 
                onePath.push(root.val);
                result.push(onePath.slice());
                onePath.pop()
                return;
            }
            onePath.push(root.val)
            dfs(root.left, result, onePath);
            dfs(root.right, result, onePath);
        }
        
    }
    dfs (root, result, [])
    return result;
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
        left: {
            val: 5,
            left: {
                val: 6,
                left: null,
                right: null
            },
            right: {
                val: 7,
                left: null,
                right: null
            }
        }, 
        right: null
    }
}
console.log(binaryTreePaths(tree))