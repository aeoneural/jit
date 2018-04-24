/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    if (nums.length <= 1) { 
        return [];
    }  
    var len = nums.length;
    var dup = -1;
    var i = 0; 
    var sum = 0;
    while (i < nums.length) { 
        if (nums.lastIndexOf(nums[i]) !== i) { 
            dup = i; 
        }
        sum += nums[i++]; 
    }

    return dup !== -1 ? [nums[dup], (len * (len + 1) / 2 - (sum - nums[dup]))] : [];
};

var test = [1,2,2,4];
var a = findErrorNums(test);
console.log(a);