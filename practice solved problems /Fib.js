var fib = function(num) { 
    
    if (num < 2) return 1; 
    // console.log('calling: ', num - 1, ' and ', num - 2);
    return fib(num - 1) + fib(num - 2);
}
for (var i = 0; i < 7; i++) { 
    console.log(fib(i));
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