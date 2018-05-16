/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
*/
var pathSumI = function(root, sum){ 
    if (root) { 
        console.log(root, ':',sum, ":", sum - root.val)

        if (root.left === null && root.right === null && root.val === sum) { 
            return true;
        } 

        return pathSumII(root.left, sum - root.val) || pathSumII(root.right, sum - root.val);
    }
    return false;
}
var tree = { 
    val: 3, 
    left: { 
        val: 2, 
        left: null,  
        right: null
    }, 
    right: { 
        val: 2, 
        left: { 
            val: 0, 
            left: null, 
            right: null
        }, 
        right: null
    }
}

console.log(pathSumII(tree, 4))