var pruneTree = function(tree) { 
    if (!tree) return null; 
    
    tree.left = pruneTree(tree.left);
    tree.right = pruneTree(tree.right); 
    // first construct the tree, and backtrack that changes will result in 
    return (tree.val === 1 || tree.left !== null || tree.right !== null) ? root : null;
}