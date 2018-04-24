/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    // Brute Force 
    // if (nums.length === 1) { 
    //     return nums[0];
    // }
    // var index = 0; 
    // var end = nums.length - k; 
    // var max = -Math.pow(2, 31);
    // while (index <= end) { 
    //     var avg = 0;
    //     var count = 0;
    //     var start = index;
    //     while (count < k) { 
    //         avg += nums[start++]
    //         count++;
    //     }
    //     max = Math.max(avg / k, max);
    //     index++;
    // }
    // return max; 

    // Optimized 
    var start = 0; 
    var max = 0; 
    while (start < k) { 
        max += nums[start++];
    }

    for (var i = k; i < nums.length; i++) { 
        sum += nums[i] - nums[i - k];
        max = Math.max(sum, max);
    }
    return max / k;
};

var test = [1, 12, -5, -6, 50, 3]; 
console.log(findMaxAverage(test, 4));