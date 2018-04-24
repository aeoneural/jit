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
var getMinimumDifference = function(root) {
    var min = Math.pow(2, 31);
    var prev = undefined; 
    var cur = undefined;

    var in_order = (root) => { 
        if (!root) return; 
        in_order(root.left);
        
        prev = cur; 
        cur = root.val
        if (prev !== undefined && cur !== undefined) {
            if (min > (cur - prev)) { 
                min = cur - prev;
            }
        }
        console.log('cur: ', cur);
        console.log('prev: ', prev);
        console.log('min: ', min);
        console.log('----------------')

        in_order(root.right);
    }
    in_order(root);
    return min;
};
var tree = { 
    val: 3.8, 
    left: { 
    	val: 2.9, 
    	left: { 
	        val: 1, 
	        left: null, 
	        right: null
    	}, 
    	right: null
	}, 
	right: { 
	        val: 6, 
	        left: null, 
	        right: null
    }  
}
console.log(getMinimumDifference(tree));