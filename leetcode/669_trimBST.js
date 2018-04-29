/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function (root, L, R) {

    if (!root) return root; 
    // determine where to start to update the tree 
    while (root.val > R || root.val < L ) {
        // console.log('root val: ', root.val, '===> ', L, ' : ', R);
        if (root.val > R) { 
            root = root.left;
        }
        if (root.val < L) { 
            root = root.right;
        }
    }
    
    // remove invalid from left tree 
    var dummy = root;
    while (dummy !== null) {
        while (dummy.left !== null && dummy.left.val < L) {
            dummy.left = dummy.left.right;
        }
        dummy = dummy.left;
    }
    dummy = root; 
    // remove invalid from left tree 
    while (dummy !== null) {
        while (dummy.right !== null && dummy.right.val > R) { 
            console.log('entered to remove invalid right value');
            dummy.right = dummy.right.left; 
        } 
        dummy = dummy.right; 
    }
    

    return root;
};
var trimBSTRecursive = function(root, L, R) { 
    if (!root) return root;
    if (root.val < L) return trimBSTRecursive(root.right, L, R);
    if (root.val > R) return trimBSTRecursive(root.left, L, R);
    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);
    return root;
}
var tree = { 
    val: 3, 
    left: { 
        val: 0, 
        left: null, 
        right: { 
            val: 2,
            left: {
                val: 1,
                left: null,
                right: null
            }, 
            right: null
        }
    }, 
    right: {
        val: 4,
        left: null,
        right: null
    }
}
tree = { 
    val: 1, 
    left: { 
        val: 0, 
        left: null, 
        right: null
    }, 
    right: { 
        val: 2, 
        left: null, 
        right: null
    }
}
console.log(trimBST(tree, 1, 2));
console.log(trimBSTRecursive(tree, 1, 2));