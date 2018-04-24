/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
    var queue = [root]; 
    var currentIndex = 0;
    var currentLayerSize = 1; 
    var found = false;
    var secondSmallest = Math.pow(2, 31); 
    while (currentIndex < queue.length) {
        var sizeofnextlayer = 0; 
        for (var i = 0; i < currentLayerSize; i++) { 
            var currentNode = queue[currentIndex++];
            if (currentNode.val > root.val) { 
                found = true;
                secondSmallest = Math.min(secondSmallest, currentNode.val)
            } 
            if (currentNode.left) {
                queue.push(currentNode.left);
                sizeofnextlayer++;
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
                sizeofnextlayer++;
            }
        
        }
        sizeofcurrentlayer = sizeofnextlayer
    }
    return secondSmallest === Math.pow(2, 31) ? -1 : secondSmallest; 
};

var tree = { 
    val: 2, 
    left: { 
        val: 2, 
        left: { 
            val: 3, 
            left: null, 
            right: null
        }
    }, 
    right: { 
        val: 5, 
        left: { 
            val: 5, 
            left: null, 
            right: null
        }, 
        right: { 
            val: 7, 
            left: null, 
            right: null
        }
    }
}
console.log(findSecondMinimumValue(tree))