/**
 * @param {string} A 
 * @param {string} B 
 * @return {number}
 * 
 * >> input: A, B
 * >> strategy: 
 * 1. keep building new string with A till it reaches b len
 * 2. check if b is contained within the new string 
 * 
 * >> transformation: 
 * 
 * 
 * >> output: number, number of times A has to be repeated
 */

var repeatedStringMatch2 = (A,B) => { 
    var str = ''; 
    str += A;
    var count = 1; 
    // while (str.indexOf(B) < 0) { 
    //     if (str.length - A.length > B.length) { 
    //         return -1
    //     }
    //     str += A;
    //     count++; 
    // }
    // return count;
    while (str.length < B.length) { 
        str += A; 
        count++;
    }
    if (str.includes(B)) return count;
    str += A; 
    if (str.includes(B)) return ++count;
    return -1
}
var test = repeatedStringMatch2('abcd', 'abcdabcd');
console.log(test)