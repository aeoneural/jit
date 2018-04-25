/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    var max1 = null, max2 = null, max3 = null; 
    var min1 = null, min2 = null;
    nums.forEach(e => {
        if (max1 === null) { 
            max1 = e; 
        } else if (max1 <= e) { 
            max3 = max2;
            max2 = max1; 
            max1 = e;
        } else if (max1 > e && (max2 === null || max2 < e)) {
            max3 = max2; 
            max2 = e;
        } else if (max2 >= e && (max3 === null || max3 < e)){
            max3 = e;
        }

        if (min1 === null) {
            min1 = e;
        } else if (min1 >= e) { 
            min2 = min1; 
            min1 = e;
        } else if (min1 < e && min2 > e) { 
            min2 = e;
        }
        
    });
    // console.log(max1, max2, max3);
    // console.log(min1, min2);
    
    return Math.max(min1 * min2 * max1, max1 * max2 * max3);


};

// console.log(maximumProduct([100, 0, 2, 3, 4]))
console.log(maximumProduct([-1000, -1000, -1000]))