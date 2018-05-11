function numOfPathsToDest(n) {
  // allocate a 2D array for memoization 
  var memo = [] 
  for (var i = 0; i < n; i++) {
    memo[i] = []
    for (var j = 0; j < n; j++) { 
      memo[i][j] = -1;
    }
  }
  console.log(memo);
  
  // the memoization aray is initialized with -1 to indicate uncalculated squares
  
  return numberOfPathsSquare(n - 1, n - 1, memo);
  
}

// input: 
// i, j - a pair of non negative int coordinates memo - a 2D memoization array 
// output: 
// number of paths from (0, 0) to the square represented in (i,j);
var numberOfPathsSquare = function(i, j, memo) { 

  if (i < 0 || j < 0) { 
    return 0;
  }
  else if (i < j) { 
    memo[i][j] = 0;
  } 
  else if (memo[i][j] !== -1) { 
    return memo[i][j]
  }
  else if (i === 0 && j === 0) { 
    memo[i][j] = 1;
  }
  else { 
    memo[i][j] = numberOfPathsSquare(i, j - 1, memo) + numberOfPathsSquare(i - 1, j, memo);
  }

    return memo[i][j]
}
var test = numOfPathsToDest(4)
console.log(test);