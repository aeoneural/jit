// Question: given the root of a tree, you are asked to find the most frequent subtree sum.

var findSubTreeSum = function(root, arr) { 
    if (!root) return 0; 

    var left = findSubTreeSum(root.left, arr);
    var right = findSubTreeSum(root.right, arr);
    var sum = left + right + root.val; 
    arr.push(sum);
    return sum;
}
var findFrequentTreeSum = function(root) { 
    var sumArray = [];
    findSubTreeSum(root, sumArray);

}
