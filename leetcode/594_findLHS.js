/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    var hashTable = {}

    for (var i = 0; i < nums.length; i++) {
        if (hashTable.hasOwnProperty(nums[i])) { 
            hashTable[nums[i]] += 1; 
        } else { 
            hashTable[nums[i]] = 1;
        }
    }
    var max = 0;
    for (var i = 0; i < nums.length; i++) { 
        if (hashTable.hasOwnProperty(nums[i] + 1)) {
            if (max < (hashTable[nums[i] + 1] + hashTable[nums[i]])) {
                max = (hashTable[nums[i] + 1] + hashTable[nums[i]]);
            } 
        }
    }

    return max; 

};  
// console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))

console.log(findLHS([1, 2, 1, 2, 1, 2, 1]))