/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    var rec = function(root) { 
        if (root === null) { 
            return 0
        }
        var leftHeight = rec(root.left); 
        if(leftHeight === -1) { 
            return -1;
        }
        var rightHeight = rec(root.right);
        if (rightHeight === -1) {
            return -1;
        }

        if (Math.abs(leftHeight-rightHeight) > 1) { 
            return -1;
        }
        return 1 + Math.max(leftHeight, rightHeight); 
    }
    if (rec(root) === -1) { 
        return false
    }
    return true;
};

var isBalancedLevel = function (root) {
    if (!root) { return; };
    var finalResult = [];
    var result = [];
    var queue = [root];
    var nodetoexpand = 0;
    var sizeofcurrentlayer = 1;

    while (nodetoexpand < queue.length) {
        var layer = [];
        var sizeofnextlayer = 0;
        for (var i = 0; i < sizeofcurrentlayer; i++) {
            var currentNode = queue[nodetoexpand++];
            layer.push(currentNode.val);
            if (currentNode.left && currentNode.right) {
                queue.push(currentNode.left);
                queue.push(currentNode.right);
                sizeofnextlayer += 2;
            } else if (currentNode.left === null && currentNode.right === null) { 
                break;
            } else { 
                return false
            }
        }
        result.push(layer);
        sizeofcurrentlayer = sizeofnextlayer;
    }
    return true;

}