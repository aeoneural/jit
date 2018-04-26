/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
    var traverse = function(node) { 
        if (!node) return '';

        if (node.left === null && node.right === null) return ''+ node.val; 
        var left = traverse(node.left); 
        if (node.right) { 
            var right = traverse(node.right);
        }
        return node.val + '(' + left + ')' + (right === undefined ? '' : ('(' + right + ')'))
    }
    return traverse(t);
};
var tree = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left:null,
        right: null
    }
}
tree = { 
    val: 1, 
    left: null, 
    right: null
}
console.log(tree2str(tree));