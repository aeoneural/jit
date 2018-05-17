var inorderTraversal = function(root) { 
    var res = [];
    if (!root) return res; 
    
    var stack = [];
    var node = 0; 

    while (node !== null) {
        stack.push(node);
        node = node.left; 
    }

    while (stack.length > 0) { 
        node = stack.pop();
        res.push(node.val);

        if (node.right !== null) { 
            node = node.right; 
            while (node !== null) { 
                stack.push(node);
                node = node.left;
            }
        }
    }
    return res;
}