var lowestcommonancestor = function(root, p, q) { 
    if (!root) {
        return null
    }
    if (q.val === root.val || p.val === root.val) return root; 

    var left = lowestcommonancestor(root.left, p, q); 
    var right = lowestcommonancestor(root.right, p, q);

    if (left && right) return root; 

    return left !== undefined ? left : right
}

var test = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {
            val: 3,
            left: {
                val: 4,
                left: null,
                right: null
            },
            right: {
                val: 5,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 7,
        left: null,
        right: null
    }
}

console.log(lowestcommonancestor(test, {val: 3}, {val: 5}))