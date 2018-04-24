/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    var arr = [];
    var recurse = (root) => { 
        if (!root) return;
        recurse(root.left)
        arr.push(root.val)
        recurse(root.right);
    }
    recurse(root);
    var start = 0; 
    var end = arr.length - 1
    console.log('arr', arr);
    while (start < end) {
        if ((arr[start] + arr[end]) === k) return true;
        if ((arr[start] + arr[end]) < k) {
            start++;
        } else { 
            end--;
        }
    }
    return false;
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
console.log(findTarget(tree, 14));