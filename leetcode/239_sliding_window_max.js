var slidingWindowMax = (arr, k) =>{ 
    var maxLeft = new Array(arr.length);
    var maxRight = new Array(arr.length);
    maxLeft[0] = arr[0];
    maxRight[arr.length - 1] = arr[arr.length - 1];

    for (let i = 1; i < arr.length; i++) { 
        maxLeft[i] = (i % k === 0) ? arr[i] : Math.max(maxLeft[i-1], arr[i]); 
        var j = arr.length - i - 1; 
        maxRight[j] = (j % k === 0 ) ? arr[j] : Math.max(maxRight[j+1], arr[j]);
    }
    var slidingWindow = new Array(arr.length - k - 1); 
    for (var i = 0, j = 0; i + k <= arr.length; i++) { 
        slidingWindow[j++] = Math.max(maxRight[i], maxLeft[i + k - 1]);

    }
    return slidingWindow;
}
var test = slidingWindowMax([2, 1, 3, 4, 6, 3, 8, 9, 10, 12, 56], 4);
console.log(test);