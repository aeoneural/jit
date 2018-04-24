var treeNode = function(value) {
    this.val = value;
    this.left = null; 
    this.right = null
} 
var helper = function(arr, start, end) { 
    if (end < start) { 
        return null;
    }
    var mid = Math.floor((start + end) / 2);
    var n = new treeNode(arr[mid]);
    n.left = helper(arr, start, mid - 1);
    n.right = helper(arr, mid + 1, end)
    return n;

}
var createMinimalBST = function(arr) { 
    return helper(arr, 0, arr.length - 1);
}

var test = [1,2,3,4,5]
console.log(createMinimalBST(test));