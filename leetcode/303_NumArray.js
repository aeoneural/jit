/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;

};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    var sum = 0;
    for (var i = i; i < j+1; i++) {         
        sum += this.nums[i];
    }
    return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */

// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
var arr = new NumArray([-2, 0, 3, -5, 2, -1])
var test = arr.sumRange(2,5);
console.log(test);
