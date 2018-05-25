/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length < 1) return nums.length; 
    var temp = new Array(nums.length).fill(1);
    var max = 0;
    for (var i = 1; i < nums.length; i++) { 
        for (var j = 0; j < i; j++) {
            if (nums[j] < nums[i]) { 
                if (temp[i] < (temp[j] + 1)) { 
                    temp[i] = temp[j] + 1;
                }
                max = Math.max(temp[i], max);
            }
        }

    }
    console.log(temp);
    return max
};

var test = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])
console.log(test);