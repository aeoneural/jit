/**
 * 
 * @param {*} root 
 */
var inOrder = (root) => { 
    var current = root; 
    while (current !== null) { 
        if (current.left === null) { 
            console.log(current.val);
            current = current.right;
        } else { 
            // find the predecessor 
            var predecessor = current.left; 
            // to find predecessor keep going right till right node is not null or right is not current. 
            while (predecessor.right !== current && predecessor.right !== null) { 
                predecessor = predecessor.right;
            }
            // if right node is null the go left after establishing link from predecessor to current
            if (predecessor.right === null) { 
                predecessor.right = current; 
                current = current.left;
            } else { 
                // left is already visited. Go right after visiting current. 
                predecessor.right = null;
                console.log(current.val);
                current = current.right;
            }
        }
    }
}
var tree = { 
    val: 1, 
    left: { 
        val: 2, 
        left: null, 
        right: null
    }, 
    right: { 
        val: 3, 
        left: null, 
        right: null
    }
}
console.log(inOrder(tree));