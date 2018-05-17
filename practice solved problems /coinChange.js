var coinChange = function(amount, coins) { 
    var combinations = new Array(amount + 1).fill(0); 
    combinations[0] = 1; 
    for (var coin = 0; coin < coins.length; coin++) {
        for (var i = 1; i < combinations.length; i++) {
            if (i >= coins[coin]) { 
                combinations[i] += combinations[i - coins[coin]];
            }
        } 
    }
    return combinations[amount];
}
console.log(coinChange(5, [1, 2, 5]))