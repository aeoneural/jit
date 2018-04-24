/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var isLeaf = function(node) { 
    return !node.left && !node.right;
}
var longestPathFinder = function (root, maxNumber) {
    
    if (isLeaf(root)) { return 0; }
    if (root.left) { 
        var left = longestPathFinder(root.left, maxNumber); 
        if (root.left.val !== root.val) { 
            left = -1; 
        }
        console.log('left', left);
    }
    if (root.right) { 
        var right = longestPathFinder(root.right, maxNumber);
        if (root.right.val !== root.val) { 
            right = -1; 
        }
        console.log('right', right);
        
    }
    // if (left && right) { 
    //     maxNumber['max'] = Math.max(maxNumber['max'], (left + right + 2));
    // }
    // console.log('left: ', left, 'right: ', right);
    console.log('max', Math.max(left, right));
    return Math.max(left, right) + 1; 
}
var longestUnivaluePath = function(root) {
    var maxNumber = {'max' : 0};
    longestPathFinder(root, maxNumber); 
    return maxNumber['max'];
};
var test = { val: 5, 
            left: { val: 4, 
                left: { val: 1, 
                    left: null, 
                    right: null }, 
                right: { val: 1, 
                    left: null, 
                    right: null } }, 
            right: { val: 5, 
                left: { val: 5, 
                    left: null, 
                    right: null }, 
                right: null } };

var calltest  = longestUnivaluePath(test); 
console.log(calltest);