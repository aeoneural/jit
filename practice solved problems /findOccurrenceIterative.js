
var binarySearch = function(start, end, number, array, isLeft) { 
    var result = -1; 
    while (start <= end) { 
        var mid = Math.floor((start + end) / 2);
        if (array[mid] === number) { 
            result = mid;
            if (isLeft) { 
                end = mid - 1;
            } else { 
                start = mid + 1;
            }

        } else if (array[mid] < number) { 
            start = mid + 1;
        } else { 
            end = mid - 1;
        }

    }
    return result;
}
var findOccurence = function(array, number) {
    var left = binarySearch(0, array.length - 1, number, array, true);
    console.log('left: ', left);
    if (left === -1) { 
        return -1;
    } 
    var right = binarySearch(0, array.length - 1, number, array, false);
    console.log('right: ', right);
    return right - left + 1;

}
var test = [1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4];
// console.log(test.indexOf(1));
// console.log(test.lastIndexOf(1));
// console.log()
console.log(findOccurence(test, 3));
