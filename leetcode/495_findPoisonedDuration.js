/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    var res = duration;
    for (var i = 1; i < timeSeries.length; i++) { 
        if (timeSeries[i] - timeSeries[i - 1] > duration) {
            res += duration;
        } else { 
            res += timeSeries[i] - timeSeries[i - 1];
        }
    }
    return res;
    return timeSeries.reduce((acc, el, i) => { 
        if (i < timeSeries.length - 1) { 
            if ((el + duration) < timeSeries[i + 1]) { 
                acc += duration;
            } else { 
                if (timeSeries[i + 1] > el ) { 
                    if (timeSeries[i + 1] > duration) { 
                        acc += timeSeries[i + 1] + 1 - el;
                    } else { 
                        acc += timeSeries[i + 1] - timeSeries[i];
                    }  
                } 
                
            }
        } else { 
            if ((timeSeries[i - 1] + duration - 1) <= el) {
                acc += duration;
            } 
        }
        return acc;
    }, 0)
};

var timeSeries = [1, 4]
timeSeries = [1, 2]
timeSeries = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(findPoisonedDuration(timeSeries, 1));