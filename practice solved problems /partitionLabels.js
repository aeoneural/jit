var partitionLabels = function(str) { 
    var lastMap = {};
    for (var i = 0; i < str.length; i++) { 
        lastMap[str[i]] = i; 
    }

    var start = -1; 
    var end = -1; 
    var res = [];
    for (var i = 0; i < str.length; i++) {
        if (start === -1) { 
            start = i;
        }
        end = Math.max(end, lastMap[str[i]]);
        if (end === i) { 
            res.push(end - start + 1);
            start = -1
        }
    }
    return res;
}
console.log(partitionLabels("ababcbacadefegdehijhklij"))