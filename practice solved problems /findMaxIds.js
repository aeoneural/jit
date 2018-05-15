var findMax = function(arr) { 
    var findMax = function(start, end, arr) { 
        var currentMax = start;
        for (var i = start + 1; i <= end; i++) {
            if (arr[currentMax] < arr[i]) {
                currentMax = i;
            }
        }
        return currentMax;
    }
    var recurse = function(start, end, arr) {
        if (start > end) return null;
        var currentMax = findMax(start, end, arr);
        var root = {};
        root.val = arr[currentMax];
        root.left = recurse(start, currentMax - 1, arr);
        root.right = recurse(currentMax + 1, end, arr);
        return root
    }

    return recurse(0, arr.length - 1, arr);
}
var arr = [3, 2, 1, 6, 5];
console.log(findMax(arr));