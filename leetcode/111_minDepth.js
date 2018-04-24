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
var minDepth = function(root) {
    if (!root) { return 0; }
    var queue = [root]; 
    var currentnodeindex = 0; 
    var currentlayersize = 1; 
    var currentlayer = 1; 
     
    while (currentnodeindex < queue.length) { 
        var nextlayersize = 0;
        for (var i = 0; i < currentlayersize; i++) { 
            var currentNode = queue[currentnodeindex++]; 
            if (!currentNode.left && !currentNode.right) { 
                return currentlayer; 
            }
            if(currentNode.left) { 
                queue.push(currentNode.left); 
                nextlayersize++; 
            }
            if (currentNode.right) {
                queue.push(currentNode.right); 
                nextlayersize++; 
            } 
        }
        currentlayersize = nextlayersize;
        currentlayer++;
    }
    return currentlayer;
};