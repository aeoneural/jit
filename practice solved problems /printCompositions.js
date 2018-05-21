var printCompositions = function(arr, m) { 
    var n = 5; 
    var newArr = [];
    console.log('different compositions formed by 1, 2 and 3 of ', n);
    printCompositionsHelper = function(arr, n, i) { 
        var maxPoint = 3;
        if (n === 0) { 
            // console.log(arr);
            return;
        } else if (n > 0) {
            for (var k = 1; k <= maxPoint; k++) { 
                arr[i] = k;
                printCompositionsHelper(arr, n - k, i + 1);
            }
        }
    }

    printCompositionsHelper(newArr, n, 0);
}

printCompositions([1,2,3], 5);