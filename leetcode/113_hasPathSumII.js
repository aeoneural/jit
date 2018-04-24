/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var isLeaf = function(root) { 
    return !root.left && !root.right; 
}
var pathSum = function (root, sum) { 
    var all = []
    var each = []
    var rec = function(root, sum) { 
        if (root) {
            if (isLeaf(root)) {
                if (root.val === sum) {
                    each.push(root.val);
                    all.push(each.slice());
                    each.pop();
                    return;
                } 
            } else {
                each.push(root.val);
                rec(root.left, sum - root.val, each, all);
                rec(root.right, sum - root.val, each, all);
                each.pop();

            }
        }

    }
    rec(root, sum)
    return all;
};


        //       5
        //      / \
        //     4   8
        //    /   / \
        //   11  13  4
        //  /  \    / \
        // 7    2  5   1
var input = { val: 5, 
    right: {
        val: 8,
            right: {
            val: 4,
                right: { val: 1, right: null, left: null },
            left: { val: 5, right: null, left: null }
        },
        left: { val: 13, right: null, left: null }
    }, 
    left: {
        val: 4,
            right: null,
                left: {
            val: 11,
                right: { val: 2, right: null, left: null },
            left: { val: 7, right: null, left: null }
        }
    } }
console.log(pathSum(input, 22))





