/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    // var i = 0; 
    // var j = 1;
    // var res = [];
    // var counter = 1;
    // while (i < nums.length) { 
    //     if (nums[i] < nums[j]) {
    //         console.log('continious: ', nums[i])
    //         console.log('counter: ', counter)
    //         counter++; 
 
    //     } else { 
    //         console.log('the moment: ', nums[i])
    //         if (res.length === 0 || res[res.length - 1] < counter) {
    //             res.push(counter);
    //         } 
    //         counter = 1;

    //     }
    //     i++;
    //     j++;
    // }
    // return res[res.length - 1];
    var i = 1; 
    var max = 1; 
    var j = 0;

    while (i < nums.length) { 

        while (i < nums.length && nums[i] > nums[i - 1]) { 
            i++;
        }
        max = Math.max(max, i - j);
        j = i; 
        i++;
    }
    max = Math.max(max, i - j); 
    return max; 
};

console.log(findLengthOfLCIS([1, 3, 5, 6, 4,8]));