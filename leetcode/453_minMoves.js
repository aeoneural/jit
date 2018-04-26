/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    var min = nums.reduce((el, acc) => { return el < acc ? el : acc }, nums[0])
    return nums.reduce((el, acc) => { return acc + (el - min)}, 0);
};
console.log(minMoves([1,2,3]))