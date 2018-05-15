var valid = function(tree) { 
    
    var recurse = function(node, min, max) { 
        if (!node) return true; 
        if ((min !== null && node.val < min) || (max !== null && node.val > max)) return false;
        return recurse(node.left, min, node.val) && recurse(node.right, node.val, max);
    }
    return recurse(tree, null, null) 
}

var tree = { 
    val: 5, 
    left: { 
        val: 6, 
        left: null, 
        right: null
    }, 
    right: { 
        val: 7, 
        left: null, 
        right: { 
            val: 8, 
            left: null, 
            right: null
        }
    }
}
console.log(valid(tree));