
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
var isSymmetric = function (root) {
    if (!root) { return true; };
    var rec = function(r1, r2) { 
        if (!r1 && !r2) { 
            return true; 
        } 
        if (!r1 || !r2) { 
            return false;
        }
        return r1.val === r2.val && rec(r1.left, r2.right) && rec(r1.right, r2.left);
    }
    return rec(root.left, root.right);
};

var isSymmetricIteratvie = function (root) {
    if (!root) return true;
    var queue = [root];
    var size = 1; 
    var start = 0;

    while () { 
        for (var i = start; i < start + size; i++) { 
            queue.push(queue[i].left);
            queue.push(queue[i].right);
        }

        // check if the layer is symmetric 
        // if true
        start += size;
        for (var i = 0; i < size; i++) { 
            if (queue[start + i] !== queue[start + size - 1 - i])
                return false;
        }
        size *= 2;         
    }
};