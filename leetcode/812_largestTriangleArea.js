/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) { 
    // min, max
    var x = [points[0][0], points[0][0]];
    var y = [points[0][1], points[0][1]];
    points.forEach((element) => { 
        if (Math.abs(element[0]) < x[0]) { 
            x[0] = Math.abs(element[0]);
        }
        
        if (Math.abs(element[0]) > x[1]) {
            x[1] = Math.abs(element[0]);
        }
        if (Math.abs(element[1]) > y[1]) {
            y[1] = Math.abs(element[1]);
        }
        if (Math.abs(element[0]) < y[0]) {
            y[0] = Math.abs(element[0]);
        }
    })

    return ((Math.abs(x[0]) + Math.abs(x[1])) * (Math.abs(y[0]) + Math.abs(y[1]))) / 2;
};
var points = [[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]]; 
console.log(largestTriangleArea(points));