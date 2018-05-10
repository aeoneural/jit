/**
 * @param {number[]} nums
 * @return {number[]}
 */


var findDuplicates = function (nums) {
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        var each = Math.abs(nums[i]);
        if (nums[each - 1] > 0) {
            nums[each - 1] *= -1;
        } else {
            res.push(Math.abs(nums[i]));
        }
    }
    console.log('nums: ', nums)
    return res;
    // return nums.reduce((acc, el, i) => { 
    //     var el = Math.abs(el)
    //     nums[el - 1] > 0 ? nums[el - 1] *= -1 : acc.push(el)
    //     return acc;
    // }, [])
};
// var findDuplicates = function (nums) {
//     var res = []
//     nums.reduce((map, each) => { 
//         // map[each] = (map[each] || 0) + 1;
//         if (map[each] === undefined) { 
//             map[each] = 1; 
//         } else { 
//             res.push(each)
//         }
//         return map;
//     }, {})
//     return res;
    
// };

var test = findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
console.log(test);