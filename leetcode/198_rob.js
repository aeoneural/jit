/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) { 
        return nums[0];
    }
    var robPath = [nums[0], Math.max(nums[0], nums[1])];
    for (var i = 2; i < nums.length; i++) { 
        robPath[i] = Math.max(robPath[i-1], robPath[i-2] + nums[i]);
    }
    return robPath[robPath.length-1];  
}

var a = rob([2,1,1,2]);
console.log(a);