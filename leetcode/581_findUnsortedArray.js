/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    var i = 0; 
    var start = -1;
    var end = -1;
    while (i < nums.length - 1) { 
        if (nums[i] >= nums[i + 1]) { 
            start = i;
            break;
        }
        i++
    }  
    console.log('start: ', start);
     
    i = nums.length - 1; 
    while ( i > 0) { 
        if (nums[i] <= nums[i - 1]) {
            end = i;
            break;
        }
        i--
    }
    console.log('start: ', start);
    console.log('end: ', end);
    if (end === - 1 && start === -1) { 
        return 0;
    } else if (end === -1) { 
        return start + 1;
    } else if (start === -1) {
        return end + 1
    }
    return end - start + 1;
 }

// console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))
// console.log(findUnsortedSubarray([2,1]));
// console.log(findUnsortedSubarray([5, 4, 3, 2, 1]))
// console.log(findUnsortedSubarray([1, 3, 2, 2, 2]))
console.log(findUnsortedSubarray([1, 2, 3, 3, 3]))