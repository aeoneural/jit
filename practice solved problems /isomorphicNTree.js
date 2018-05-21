var isomorphicNTree = function(tree1, tree2) { 
    if (tree1 === null || tree2 === null) return false; 
    if (tree1 === null && tree2 === null) return true; 
    if (tree1.children.length !== tree2.children.length) return false;

    for (var i = 0; i < tree1.children.length; i++) { 
        if (tree1.children[i].val !== tree2.children[i].val) { 
            return false;
        }
        isomorphicNTree(tree1.children[i], tree2.children[i]);
    }
    return true;
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
    children: [
        {
            val: 6,
            children: []
        },
        {
            val: 3,
            children: []
        }
    ]
}

console.log(isomorphicNTree(tree1, tree2));