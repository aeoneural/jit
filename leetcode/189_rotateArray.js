/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (arr, k) {
    if (arr === null || arr.length === 0 || k > arr.length) { 
        return []; 
    }
    var a = arr.length - k; 
    var reverse = function (left, right) {
        if (arr.length === 0) {
            return;
        }
        while (left < right) {
            var temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    reverse(0, a-1); 
    reverse(a, arr.lenght-1);
    reverse(0, arr.length-1);
    
    return arr;
    
};
var input = [1,2,3,4,5,6,7]
rotate(input, 3);
console.log(rotate(input, 3));