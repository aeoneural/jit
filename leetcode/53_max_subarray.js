/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) { 
        return 0;
    }
    var max = nums[0]; 
    for (var i = 0; i < nums.length; i++) { 
        var each = 0; 
        for (var k = i; k < nums.length; k++) { 
            each += nums[k]; 
            if (max < each) { 
                max = each; 
            }
        }
    }
    // console.log(max);
    return max;
};
maxSubArray([2, 1, -3, 4, -1, 2, 1, -5, 4]);