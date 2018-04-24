var rob = function(houseArray) { 
    var len = houseArray.length - 1;
    var max = 0;
    var rec = function(path, lastSeenIndex, sum) { 
        if (lastSeenIndex === len || lastSeenIndex === len - 1) { 
            if (len === 0) { 
                sum += houseArray[0];
            }
            max = Math.max(sum, max);
            return 
        }
        var nextIndex = lastSeenIndex === - 1 ? 0 : lastSeenIndex + 2; 
        for (var i = nextIndex; i <= len; i++) { 
            path.push(houseArray[i]); 
            rec(path, i, sum + houseArray[i]);
            path.pop();
        }
    }
    rec([], -1, 0);
    console.log(max);
    return max; 
}
rob([1])