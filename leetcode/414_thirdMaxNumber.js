/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var max = undefined; 
    var max2 = undefined; 
    var max3 = undefined; 

    for (var i = 0; i < nums.length; i++) { 
        if (max === nums[i] || max2 === nums[i] || max3 === nums[i]) { 
            continue;
        }
        if (max === undefined || nums[i] > max) { 
            max3 = max2; 
            max2 = max; 
            max = nums[i]
        } else if (max2 === undefined || nums[i] > max2) { 
            max3 = max2; 
            max2 = nums[i];
        } else if (max3 === undefined || nums[i] > max3) { 
            max3 = nums[i];
        }
    }
    return max3 !== undefined ? max3 : max;
};
console.log(thirdMax([2, 2, 3, 1]))

