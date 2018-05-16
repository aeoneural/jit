var nextGreaterElements = function(nums) { 
    if (nums.length === 0) return [];

    var len = nums.length * 2; 
    var stack = [{value: nums[0], index: 0}];
    var res = [];

    for (var i = 0; i < len; i++) { 
        while (stack.length > 0 && stack[stack.length - 1].value) { 

            var el = stack.pop();
            res[el.index] = nums[i % nums.length];
        }
        stack.push({ value: nums[i % nums.length], index: i % nums.length})
    }

    while (stack.length > 0) { 
        if (res[stack[stack.length - 1].index] === undefined) { 
            res[stack.pop().index] = -1;
        } else { 
            stack.pop();
        }
    }
    return res;





}