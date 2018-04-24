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
var inorderTraversal = function(root) {
    var res = [];
    if (!root) return; 
    var stack = []; 
    var node = root; 

    while (node !== null) { 
        stack.push(node); 
        node = node.left; 
    }

    while (stack.length > 0 ) { 
        node = stack.pop(); 
        res.push(node.val); 

        if (node.right !== null) { 
            node = node.right; 
            while (node !== null) { 
                stack.push(node); 
                node = node.left;
            }
        }
    }
    return res;
};

var tree = { 
    val: 1, 
    left: { 
        val: 2, 
        left: null, 
        right: { 
            val: 3, 
            left: null, 
            right: null
        }
    }, 
    right: { 
        val: 4, 
        left: null, 
        right: null
    }
}
console.log(inorderTraversal(tree))