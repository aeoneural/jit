var mergeArrays = function(arr1, arr2) { 
    var mergedArr = [];

    var i = 0; 
    var j = 0;
    var c = 0;
    while (c < arr1.length + arr2.length) { 
        
        if (arr1[i] < arr2[j]) { 
            mergedArr[c] = arr1[i]
            i++;
        } else { 
            mergedArr[c] = arr2[j];
            j++;
        }
        c++;
    }
    return mergedArr;
}

console.log(mergeArrays([1, 5, 7], [2, 3, 4, 8]))