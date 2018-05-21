/**
 * @param {number[]} nums
 * @return {number[]}
 * Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.
 */ 
var singleNumber = function (nums) {
    var hMap = {};
    var res = []
    nums.forEach((el, i) => { 
        if (hMap[el] === undefined) { 
            hMap[el] = 1;
        } else { 
            hMap[el]++;
        }
    })
    for (var key in hMap) { 
        if (hMap[key] < 2) { 
            res.push(Number(key));
        }
    }
    return res;
};

var arr = [1, 2, 1, 3, 2, 5]; 
var test = singleNumber(arr)
console.log(test);