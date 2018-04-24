/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {

    if (nums === null || nums.length < 2) { 
        return -1; 
    }
    if (nums.length === 1) return 0;

    var max = -Math.pow(2, 31) - 1;
    var secondMax = -Math.pow(2, 31);
    var index = 0; 

    for (var i = 0; i < nums.length; i++) { 
        if (nums[i] > max) { 
            secondMax = max; 
            max = nums[i];
            index = i;
        } else if (nums[i] !== max && nums[i] > secondMax) { 
            secondMax = nums[i];
        }
    }
    console.log('first: ', max);
    console.log('second: ', secondMax);
    if (secondMax * 2 <= max) {
        return index;
    }
    return -1; 

};
console.log("hello world");
dominantIndex([0, 0, 0, 1]);