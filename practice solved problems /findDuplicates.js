var findDuplicates = function(arr) { 
    var res = [];
    for (var i = 0; i < arr.length; i++) { 
        var value = Math.abs(arr[i]);
        if (arr[value - 1] > 0) {
            arr[value - 1] *= -1
        } else { 
            res.push(arr[i]);
        }
    }
    return res;
}
findDuplicates([1, 1, 2, 2, 3, 4])