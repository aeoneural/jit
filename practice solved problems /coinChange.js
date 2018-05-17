var coinChange = function(amount, coins) { 
    var combinations = new Array(amount + 1).fill(0); 
    combinations[0] = 1; 
    for (var coin = 0; coin < coins.length; coin++) {
        for (var i = coins[coin]; i < combinations.length; i++) {
            combinations[i] += combinations[i - coins[coin]]
        } 
    }
    return combinations[amount];
}

var coinChangeSecond = function(amount, coins) { 
    var waysOfDoingNCoins = [];

    for (var i = 0; i <= amount; i++) { 
        waysOfDoingNCoins[i] = 0;
    }
    waysOfDoingNCoins[0] = 1; 

    coins.forEach((coin)=>{ 
        for (var higherAmount = coin; higherAmount <= amount; higherAmount++) { 
            var remainder = higherAmount - coin; 
            waysOfDoingNCoins[higherAmount] += waysOfDoingNCoins[remainder];
        }
    })
    return waysOfDoingNCoins[amount];
}
console.log(coinChangeSecond(5, [1, 2, 5]))