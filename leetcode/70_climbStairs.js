/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    var total = 0; 
    var stairs = [1,2]; 
  
    var rec = function(currentTotal) { 
        if (currentTotal > n) { 
            return;
        }
        if (currentTotal === n) { 
            total++;
            return
        }
        for (var i = 0; i < stairs.length; i++) { 
            rec(currentTotal + stairs[i]);
        }
    }
    rec(0);
    return total;
};
var climbStairsFaster = function (n) { 
    const fib = [1,2];
    for (let i = 2; i < n; i++) { 
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n-1];
}


console.log(climbStairsFaster(45))