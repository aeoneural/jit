/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (flowerbed.length < n) { 
        return false;
    }
    var counter = 0; 
    var i = 0; 
    while (i < flowerbed.length) { 
        if (flowerbed[i] === 0) { 
            var prev = (i === 0) ? 0 : flowerbed[i - 1];
            var next = (i === flowerbed.length - 1 ? 0 : flowerbed[i + 1]);
            console.log(prev, ':', flowerbed[i], ':', next);
            if (prev === 0 && next === 0) {
                flowerbed[i] = 1;
                counter++;
            }
        }
        i++;
    }
    return counter === n;
    
};
var test = canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2)
console.log(test);

