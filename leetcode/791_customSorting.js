/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    var hMap = {}
    for (var i = 0; i < T.length; i++) { 
        if (hMap[T[i]] === undefined) { 
            hMap[T[i]] = 1; 
        } else { 
            hMap[T[i]]++;
        }
    }
    var sortedMap = {}
    var sorted = '';
    var unsorted = '';
    for (var i = 0; i < S.length; i++) { 
        if (hMap[S[i]]) { 
            sorted += S[i].repeat(hMap[S[i]]);
            sortedMap[S[i]] = 1;
        }
    }
    for (var i = 0; i < T.length; i++) { 
        if (sortedMap[T[i]] === undefined) { 
            unsorted += T[i];
        }
    }
    return sorted + unsorted
};

customSortString('cba', 'abcd');
customSortString("kqep", "pekeq")