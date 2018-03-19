/**
 * 617
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (!t1 || !t2) {
        return t1 === null ? t2 : t1;
    } 
    t1.val += t2.val; 
    t1.left = mergeTrees(t1.left, t2.left); 
    t1.right = mergeTrees(t1.right, t2.right);
    return t1;
};
var print = function(root) { 
    if (!root) return; 
    print(root.left); 
    console.log(root.val);
    print(root.right);
}
var tree1 = { 
    val: 1, 
    left: {
        val: 2, 
        left: null, 
        right: null
    }, 
    right: { 
        val: 3, 
        left: null, 
        right: { 
            val: 4, 
            left: null, 
            right: null
        }
    }
}
var tree2 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: {
            val: 4,
            left: {
                val: 10, 
                left: null, 
                right: null
            } ,
            right: null
        }
    }
}

var result = mergeTrees(tree1, tree2)
console.log(result);
print(result)