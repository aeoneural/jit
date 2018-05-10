/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    var i = 0;
    var j = nums.length; 
    while (i < j) { 
        var mid = Math.floor((i + j) / 2); 
        if (mid % 2 === 1) mid--; 
        if (nums[mid + 1] !== nums[mid]) { 
            j = mid; 
        } else { 
            i = mid + 2;
        }
    }
    return nums[i];
};

var arr = [1, 1, 2, 3, 3, 4, 4, 8, 8]; 
var test = singleNonDuplicate(arr);
console.log(test);