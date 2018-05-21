var validBST = function(root, min = null, max = null) { 
    if (!root) return true; 
    if ((min !== null && root.val < min) || (max !== null && root.val > max)) { 
        return false;
    }
    return validBST(root.left, min, root.val) && validBST(root.right, root.val, max);
}

var validBSTConstantSpace = function(root) { 
    var prev = null
    var cur = null 
    // console.log('prev \t \t root ')
    var traverse = function(root) { 
        if (root) { 
            if (!traverse(root.left)) {
                return false;
            }
            
            console.log(prev + ' \t \t ' + root.val);
            if (prev !== null && root.val <= prev) { 
                return false;
            }
            prev = root.val;
            return traverse(root.right)
        }
        return true;     
    }
    return traverse(root);
}

var tree = { 
    val: 5,
    left: { 
        val: 3, 
        left: null, 
        right: null
    }, 
    right: { 
        val: 8, 
        left: null, 
        right: null
    }
}
console.log(validBSTConstantSpace(tree))
// console.log(validBST(tree));