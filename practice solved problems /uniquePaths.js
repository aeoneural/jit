var uniquePaths= function(m, n) { 
    if (m <= 1) return 1; 
    var arr = [];
    for (var i = 0; i < m; i++) { 
        arr.push(new Array(n));
    };

    var uniquePathsArr = [];
    for (var i = 0; i < m; i++) { 
        for (var j = 0; j < n; j++) { 
            if (i === 0 || j === 0) { 
                uniquePathsArr[i, j] = 1;
            } else { 
                uniquePathsArr[i, j] = uniquePathsArr[i - 1,j] + uniquePathsArr[i, j - 1];
            }
        }
    }
    return uniquePathsArr[m - 1, n - 1];
}
console.log(uniquePaths(5, 4))