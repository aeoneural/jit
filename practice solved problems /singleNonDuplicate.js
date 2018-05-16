var singleNonDuplicate = function(arr) { 
    // if index is even, that means we might have index / 2 valid pairs before it 
    // if index is odd, decrease it by 1.

    // if value at index is equal to element next to it, the new start is index + 2 
    // else end is the current index; 
    
    var i = 0; 
    var j = arr.length; 
    
    while (i < j) { 
        var mid = Math.floor( (i + j) / 2);
        if (mid & 1) mid--; 

        if (arr[mid + 1] !== arr[mid]) { 
            j = mid; 
        } else { 
            i += 2;
        }
    }
    return arr[i];
}

console.log(singleNonDuplicate([ 1, 1, 2, 2, 3, 4, 4, 6, 6]))