/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    var original = nums.slice(); 
    nums.sort((a, b) => { return a - b; });

    var start = 0; 
    var end = original.length - 1; 
    var substart = 0;
    



    
};

var test = findUnsortedSubarray([2,1, -1]);
console.log(test);


node test_answer.js inputs/american_football_formation.json
node test_answer.js inputs / american_football_formation.json


