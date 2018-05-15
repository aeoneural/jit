var customSortString = function(S, T) { 
    var hMap = {}
    for (var i = 0; i < T.length; i++) { 
        if (hMap[T[i]] === undefined) {
            hMap[T[i]] = 1;
        } else { 
            hMap[T[i]]++;
        }
    }

    var sorted = '';
    var sortedMap = {}
    for (var i = 0; i < S.length; i++) {
        if (hMap[S[i]]) { 
            sorted += S[i].repeat(hMap[S[i]]);
            sortedMap[S[i]] = 1;
        } 
    }
    var unsorted = '';
    for (var i = 0; i < T.length; i++) { 
        if (!sortedMap[T[i]]) { 
            unsorted += T[i]
        }
    }
    return sorted + unsorted;
}