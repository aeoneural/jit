
/**
 * @param {number} num
 * @return {string[]}
 */
var generateDigit = (nums, count) => {
    var res1 = [];
    generateDigitHelper(nums, count, 0, 0, res1);
    return res1;
}

var generateDigitHelper = (nums, count, pos, sum, res) => {
    if (count === 0) {
        res.push(sum);
        return;
    }
    for (var i = pos; i < nums.length; i++) {
        generateDigitHelper(nums, count - 1, i + 1, sum + nums[i], res);
    }
}
var readBinaryWatch = function(num) {
    if (num === 0) return ['0:00']
    var res = []; 
    var nums1 = [8, 4, 2, 1]; 
    var nums2 = [32, 16, 8, 4, 2, 1];

    for (var i = 0; i <= num; i++) {
        var list1 = generateDigit(nums1, i);
        var list2 = generateDigit(nums2, num - i);
        console.log('list1: ', list1); 
        console.log('list2: ', list2);
        for (var j = 0; j < list1.length; j++) { 
            if (list1[j] >= 12) continue; 
            for (var k = 0; k < list2.length; k++) { 
                if (list2[k] >= 60) continue; 
                res.push(list1[j] + ':' + (list2[k] < 10 ? '0' + list2[k] : list2[k]));
            }
        }
        // list1.forEach(element1 => {
        //     if (element1 >= 12) return true;
        //     list2.forEach(element2 => { 
        //         if (element2 >= 60) return true; 
        //         res.push(element1 + ':' + (element2 < 10 ? '0' + element2 : element2));
        //     }) 
        // });
    }
    return res; 
};


console.log(readBinaryWatch(2));