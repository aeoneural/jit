var searchTree = function(root, val) { 
    if (val === root.val) return true; 
    var found = false; 
    if (root.left) { 
        found = searchTree(root.left, val);
    }
    if (!found && root.right) { 
        found = searchTree(root.right, val);
    }
    return found;
}

var tree1 = {
    val: 5,
    children: [
        {
            val: 6,
            children: []
        },
        {
            val: 4,
            children: []
        }
    ]
}
var tree2 = {
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
}
console.log(searchTree(tree2, -1))