/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) { return; }
    var finalResult = []
    var result = []
    var queue = [root];
    var nodetoexpand = 0; 
    var sizeofcurrentlayer = 1;
    while (nodetoexpand < queue.length) { 
        var layer = [];
        var sizeofnextlayer = 0; 
        for (var i = 0; i < sizeofcurrentlayer; i++) {
            var currentNode = queue[nodetoexpand++];
            layer.push(currentNode.val);
            // layer += " " + currentNode.val
            if (currentNode.left) {
                queue.push(currentNode.left);
                sizeofnextlayer++;
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
                sizeofnextlayer++;
            }
        }
        result.push(layer);
        sizeofcurrentlayer = sizeofnextlayer;
    }
    
    for (var i = 0; i < result.length; i++) {
        finalResult.push(result[result.length-i-1]);
    }
    // console.log("hello: ", finalResult);
    return finalResult;
};
var test = { val: 1, left: { val: 2, left: null, right: {val: 3, left: {val: 4, left: null, right: null}, right: {val:5, left: null, right: null}} }, right: null }
levelOrderBottom(test);