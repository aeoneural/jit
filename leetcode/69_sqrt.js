/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    var rec = function(start, end) { 
        var med = Math.floor((start+end)/2);
        if (med * med === x) { 
            return med;
        } 
        if ((med * med) > x){ 
            return rec(start, med);
        } 
        if ((med + 1) * (med + 1) > x) {
            return med;
        }

        return rec(med, end)

    }
    return rec(1, x);
};

var mySqrt1 = function(x)  { 
    var answer = 0; 
    var rec = function(start, end) { 
        if (start > end) { 
            return; 
        }
        var mid = Math.floor((start + end) / 2); 
        if (mid * mid === x) { 
            answer = mid; 
            return; 
        }
        if (mid * mid > x) { 
            rec(start, mid - 1); 
        } else { 
            if (answer < mid) { 
                answer = mid; 
            }
            rec(mid + 1, end);
        }
    }

    rec(1, x);
    return answer; 
}

var mySqrt2 = function(x) { 
    var start = 1; 
    var end = x;
    var mid; 
    var answer = 0; 
    while (start <= end) { 
        mid = Math.floor((start + end) / 2); 
        if (mid * mid === x) { 
            return mid; 
        }
        if (mid * mid > x) { 
            end = mid - 1; 
        } else { 
            if (answer < mid) { 
                answer = mid; 
            }
            start = mid + 1; 
        }
    }
    return answer; 
}
console.log(mySqrt2(9))
