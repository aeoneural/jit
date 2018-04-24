/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 * 
 * [1,2,3,4],[1,4]
 * 
 */

/* 
input: [1,2,3,4], [1,4] (number of houses, and heaters)
strategy:  
    for each i = 0 ... houses.length-1 
        if heater set contains the house value 
            update radius if current count is greater than it 
        else 
            reset count to 0 
transformation:  
 

output: 2 
*/
var findMinRadius = function(array, n) { 
    var start = 0;
    while (start < array.length) { 
        // console.log(array[start], ':', n);
        if (array[start] === n) { 
            return 0; 
        }
        if ((start + 1) < array.length && (array[start] < n && array[start+1] > n)) { 
            return Math.min(n -  array[start], array[start+1] - n);
        }
        start++;
    }
    return n < array[0] ? array[0] - n : n - array[array.length - 1]
}
// for (var i = 0; i < 10; i++){ 
//     console.log([3, 5, 7, 8], ':', i, '=> ', findMinRadius([3, 5, 7, 8], i));
// }
var findRadius = function (houses, heaters) {
    var radius = 0;
    heaters.sort((a, b) => { return a - b; });
    for (var i = 0; i < houses.length; i++) { 
        
        // console.log(i, ':' ,findMinRadius(heaters, houses[i]))
        radius = Math.max(radius, findMinRadius(heaters, houses[i]))
    }
    return radius;
};
var test = findRadius([282475249, 622650073, 984943658, 144108930, 470211272, 101027544, 457850878, 458777923], 
    [823564440, 115438165, 784484492, 74243042, 114807987, 137522503, 441282327, 16531729, 823378840, 143542612]
);
console.log(test);

// [282475249,622650073,984943658,144108930,470211272,101027544,457850878,458777923]
// [823564440, 115438165, 784484492, 74243042, 114807987, 137522503, 441282327, 16531729, 823378840, 143542612]
