var lowestCommonAncestor = function(root, p, q) { 
    
    if (!root) return null 
    if (root === q || root === p) return root; 

    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowerstCommonAncestor(root.right, p, q); 

    if (left && right) return root; 
    return left !== null ? left : right;
}