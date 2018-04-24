/**
 * @param {number[][]} points
 * @return {number}
 */
var getDis = function(p, q) { 
    var a = p[0] - q[0];
    var b = p[1] - q[1];
    return a*a + b*b;
}
var numberOfBoomerangs = function (points) {
    if (points.length === 0) return 0;
    var res = 0;
    for (var i = 0; i < points.length; i++) { 
        var hashTable = {};
        var p = points[i];
        for (var j = 0; j < points.length; j++) { 
            if (j === i) continue; 
            var q = points[j];
            var dis = getDis(p, q);
            console.log('distance: ', dis);
            if (!hashTable.hasOwnProperty(dis)) { 
                hashTable[dis] = 1; 
            } else { 
                hashTable[dis]++;
            }
        }
        for (var key in hashTable) { 
            var size = hashTable[key];
            if (size >= 2) { 
                res += (size* (size - 1))
            }
        }
    }
    return res; 
};

var input = [[0, 0], [1, 0], [2,0]]
console.log(numberOfBoomerangs(input))