/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    var i = 0; 
    var count = 0; 
    for (var i = 0; i < nums.length; i++) { 
        if (!(nums[i] <= nums[i+1])) { 
            if (count > 1) { 
                return false;
            }
            if (i - 1 >= 0 && i + 2 < nums.length && nums[i-1] > nums[i+1] && nums[i] > nums[i+2]) { 
                return false;
            }
            count++;
        }
    }
    
};
var test = checkPossibility([3, 4, 2, 3]); 
console.log(test);
