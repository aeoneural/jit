/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, n) {
    // var hashTable = {};
    // var count = 0;
    // for (var i = 0; i < nums.length; i++) { 
    //     for (var k = i+1; k < nums.length; k++) { 
            
    //         if (Math.abs(nums[i] - nums[k]) === n) { 
    //             console.log('hashtable: ', hashTable);

    //             if (!hashTable[nums[i]] ) { 

    //                 if (hashTable[nums[k]] && hashTable[nums[k]].has(nums[i])) { 
    //                     // console.log('set:', hashTable[nums[k]], 'has', nums[i])
    //                 }else { 
    //                     hashTable[nums[i]] = new Set([nums[k]]);
    //                     count++;
    //                 }
                    
    //             } else {  
    //                 if (!hashTable[nums[i]].has(nums[k])) {
                       
    //                     hashTable[nums[i]].add(nums[k])
    //                     count++;
    //                 }
    //                 if (hashTable[nums[k]] && hashTable[nums[k]].has(nums[i])){ 
                        
    //                 }
    //                 // console.log(hashTable[nums[i]], 'hass', nums[k])
    //             }
    //         }
            

    //     }
    // }
  
    // console.log(count);
    // return count;

    if (n < 0) { 
        return 0;
    }
    var hashtable = {}; 
    var counter = 0;
    for (var i = 0; i < nums.length; i++) { 
        if (!hashtable.hasOwnProperty(nums[i])) { 
            hashtable[nums[i]] = 1; 
        } else { 
            hashtable[nums[i]]++;
        }
    } 
    // console.log(hashtable);
    for (var key in hashtable) {
        // console.log(hashtable[key])
        if (n && hashtable.hasOwnProperty(Number(key) + n)) { 
            counter++;
        }
        if (n === 0 && hashtable[key] > 1) {
            counter++;
        }
    }
    return counter;
};
// [3, 1, 4, 1, 5], k = 2 Output: 2;
// [1, 3, 1, 5, 4], k = 0

var test = [3, 1, 4, 1, 5];
// findPairs([-1, 0, 0, 1, 0, 0, -1], 0);
console.log(findPairs([1, 3, 1, 5, 4], 0));
