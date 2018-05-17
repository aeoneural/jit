var fib = function() { 
    this.memo = {}
    
}

fib.prototype.findNthFib = function(n) { 
    if (n < 0) { 
       throw new Error('index was negative'); 
    }

    //base case: 0 or 1 
    else if (n === 0 || n === 1) return n; 

    // see if we've calculated it already 
    if (this.memo.hasOwnProperty(n)) { 
        return this.memo[n];
    }

    var result = this.findNthFib(n - 1) + this.findNthFib(n - 2)

    // memoize
    this.memo[n] = result;
    return result
}
var test = new fib();
for (var i = 0; i < 7; i++) { 
    
    console.log(test.findNthFib(i));
}

/* 
0   1  
1   1
2   2
3   3
4   5
5   8 
6   13

*/