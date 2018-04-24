/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    var isSame = (s, t) => { 
        if (!s && !t) {
            return true;
        } else if (!s || !t) {
            return false;
        } else if (s.val !== t.val) {
            return false;     
        }
        return isSame(s.left, t.left) && isSame(s.right, t.right);
    }
    if (!s) return false; 
    if (isSame(s, t)) return true;
    return isSubtree(s.left, t) || isSubtree(s.right, t);

    

};
var tree1 = {
    val: 3,
    left: {
        val: 4,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 2,
            left: null,
            right: null
        }
    },
    right: {
        val: 5,
        left: null,
        right: null
    }
}
var tree2 = {
    val: 4,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 2,
        left: null,
        right: null
    }
}
var tree3 = {
    val: 4,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 2,
        left: null,
        right: null
    }
}
var a = { 
    val: 1, 
    left: { 
        val: 1, 
        left: null, 
        right: null
    }, 
    right: null
}
var b = { 
    val: 1, 
    left: null,
    right: null
}
console.log(isSubtree(a, b));