/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    var hashTable = {};
    for (var i = 0; i < nums.length; i++) { 
        if(!hashTable.hasOwnProperty(nums[i])) { 
            hashTable[nums[i]] = i; 
        } else { 
            console.log(hashTable)
            // console.log(nums[i])
            console.log('i:', i)
            if (Math.abs(hashTable[nums[i]] - i) <= k) {
                return true; 
            } else { 
                hashTable[nums[i]] = i;
            }
        }
    }
    return false; 
};
var a = containsNearbyDuplicate([1, 0, 1, 1], 1)
console.log(a);