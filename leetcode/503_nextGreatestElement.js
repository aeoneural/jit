/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    var len = nums.length * 2;
    var stack = [{value: nums[0], index: 0}];
    var res = []
    for (var i = 0; i < len; i++) { 
        // console.log('num: ', nums[i % nums.length]);
        console.log('stack: ', stack);
        console.log('res: ', res);
        console.log('val: ', nums[i % nums.length])
        while (stack.length > 0 && stack[stack.length - 1].value < nums[i % nums.length]) {
            var el = stack.pop();
            res[el.index] = nums[i % nums.length];     
        }
        stack.push({ value: nums[i % nums.length], index: i % nums.length });
        console.log('---------')
    }
    while (stack.length > 0) { 
        if (res[stack[stack.length - 1].index] === undefined) { 
            res[(stack.pop().index)] = -1;
        } else { 
            stack.pop()
        } 
    }
    console.log('res: ', res);
    return res;
};
nextGreaterElements([1, 2, 1])