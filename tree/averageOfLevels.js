/**
 * 637
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * Problem definition: 
 * Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
Input:
    3
   / \
  9  20
    /  \
   15   7
Strategy: 
    1. Do bread first search iteratively 
Output: [3, 14.5, 11]
*/
var averageOfLevels = function (root) {
    var result = []
    var queue = [root]; 
    var indexToExpand = 0; 
    var sizeOfCurrentLayer = 1; 

    while (indexToExpand < queue.length) { 
        var layerSum = 0; 
        var sizeOfNextLayer = 0; 
        for (var i = 0; i < sizeOfCurrentLayer; i++) { 
            var currentNode = queue[indexToExpand++]; 
            layerSum += currentNode.val;
            if (currentNode.left) { 
                queue.push(currentNode.left);
                sizeOfNextLayer++;
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
                sizeOfNextLayer++;
            }
        }
        
        result.push(layerSum / sizeOfCurrentLayer);
        sizeOfCurrentLayer = sizeOfNextLayer;
    }
    return result;
};
var tree = { 
    val: 3, 
    left: { 
        val: 9, 
        left: null, 
        right: null
    }, 
    right: { 
        val: 20, 
        left: { 
            val: 15, 
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
console.log(averageOfLevels(tree));