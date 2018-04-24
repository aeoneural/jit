var isSame = (t1, t2) => { 
    if (!t1 && !t2) return true; 
    else if (!t1 || !t2) return false; 
    else if (t1.val !== t2.val) return false;
    return isSame(t1.left, t2.left) && isSame(t1.right, t2.right);
}
var isSubtree = (t1, t2) => { 
    // decide if t2 is subtree of t1. 
    if (!t1) return false;
    if (isSame(t1, t2)) return true; 
    return isSubtree(t1.left, t2) || isSubtree(t1.right, t2); 
}