var mergeSort = (array) => { 
    // determine the size of the input array 
    var arraySize = array.length; 

    // if the array being passed in has only one element within it, it is considered to be a sorted array 

    if (arraySize === 1) { 
        return; 
    }

    // if array contains more than one element, split it into two parts (left and right arrays)

    var midpoint = Math.floor(arraySize / 2); 
    var leftArray = array.slice(0, midpoint); 
    var rightArray = array.slice(midpoint);
    
    // recursively call mergeSort function above finish executing, merge the sorted leftArray and rightArray together 
    mergeSort(leftArray); 
    mergeSort(rightArray); 

    // after the mergeSort functions above finish executing, merge sorted leftArray and rightArray together 
    merge(leftArray, rightArray, array);

    return array; 
}

var merge = (leftArr, rightArr, array) => { 
    var index = 0; 
    while (leftArr.length && rightArr.length) { 
        if (rightArr[0] < leftArr[0]) { 
            array[index++] = rightArr.shift();
        } else { 
            array[index++] = leftArr.shift();
        }
    }

    while (leftArr.length) { 
        array[index++] = leftArr.shift();
    }
    while (rightArr.length) { 
        array[index++] = rightArr.shift();
    }
}

var test = [4,5,3,2,1]
console.log(mergeSort(test));