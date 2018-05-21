var isBST = function(root) { 
    return isBSTHelper(root, null, null)
}
var isBSTHelper = function(root, min, max) { 
    if (!root) return true; 
    if ((min !== null && min > root.val) || (max !== null && max < root.val)) return false; 
    
    return isBSTHelper(root.left, min, root.val) && isBSTHelper(root.right, root.val, max);
}

console.log(isBST({ 
    val: 5, 
    left: { 
        val: 3, 
        left: null, 
        right: null
    },
    right: { 
        val: 2, 
        left: null, 
        right: null
    }
}))