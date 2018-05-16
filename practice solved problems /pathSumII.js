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
var pathSumII = function(root, sum) { 
    var all = [];
    var each = [];
    var recurse = function(root, sum, path, allPaths) { 
        
        if (root) { 
            if (root.left === null && root.right === null && root.val === sum) {
                path.push(root.val);
                allPaths.push(path.slice());
                path.pop();
            } else { 
                path.push(root.val);
                recurse(root.left, sum - root.val, path, allPaths);
                recurse(root.right, sum - root.val, path, allPaths);
                path.pop();
            }     
        }
    }
    recurse(root, sum, each, all);
    return all
}
var tree = { 
    val: 3, 
    left: { 
        val: 1, 
        left: null,  
        right: null
    }, 
    right: { 
        val: 2, 
        left: { 
            val: -1, 
            left: null, 
            right: null
        }, 
        right: null
    }
}

console.log(pathSumII(tree, 4))