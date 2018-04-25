/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var arr1;
    var arr2;
    if (nums1.length < nums1.length) { 
        arr1 = nums1;
        arr2 = nums2;
    } else { 
        arr1 = nums2; 
        arr2 = nums1;
    }

    var hash1 = {};
    arr2.forEach(element => {
        if (hash1.hasOwnProperty(element)){ 
            hash1[element] += 1;
        } else { 
            hash1[element] = 1;
        }
    });

    var res = [];
    arr1.forEach(element => {
        if (hash1.hasOwnProperty(element)) { 
            res.push(element); 
            hash1[element]--;
        }
    });

    return res;

    /* 
    clear and concise 
    const map = {};
    const res = [];

    nums1.forEach(num => {
        if (map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    });

    nums2.forEach(num => {
        if (map[num] > 0) {
            res.push(num);
            map[num]--;
        }
    });

    return res;
    */
};

console.log(intersect([1,2,3,2], [2]))