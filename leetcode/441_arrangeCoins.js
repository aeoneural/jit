/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    return Math.round(Math.sqrt(1 + 8 * n) / 2) - 1;
};
for (var i = 0; i < 10; i++) { 
    console.log(i + ':' + arrangeCoins(i));
}