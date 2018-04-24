/**
 * @param {string} s
 * @return {string}
 * 
 * 
 */
var reverse = (arr, i) => {  
    var end = arr[i].length - 1; 
    var word = ''; 
    console.log('each word: ', arr[i])
    while ( end > -1) { 
        word += arr[i][end]; 
        end--;
    }
    arr[i] = word;
}
var reverseWords = function (s) {
    var arr = s.split(' '); 
    for (var i = 0; i < arr.length; i++) { 
        reverse(arr, i); 
    }
    return arr.join(' ');
}

var test = reverseWords('hello word');
console.log(test);
