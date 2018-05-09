/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabelsSecond = function(S) { 
    var last = {};
    var res = [];
    for (let i = 0; i < S.length; i++) {
        const element = S[i];
        last[element] = i;
    }
    var start = 0; 
    var end = 0; 

    for (var i = 0; i < S.length; i++) { 
        var char = S[i]; 
        if (last[char] > end) { 
            end = last[char];
        } else if (last[char] === end && end === i) {
            res.push(end - start + 1); 
            end = i + 1; 
            start = i + 1;
        } 
    }
    return res;
}
var partitionLabels = function (S) {
    var last = {};

    for (let i = 0; i < S.length; i++) {
        const element = S[i];
        last[element] = i; 
    }
    var start = -1; 
    var end = -1; 
    var result = [];
    for (var i = 0; i < S.length; i++) { 
        if (start === -1) { 
            start = i; 
        } 
        end = Math.max(last[S[i]], end);
        if (end === i) { 
            result.push( end - start + 1);
            start = -1;
        }
    }
    return result;
    // while (i < S.length) {
    //     var end = last[S[i]];
    //     var stack = [];
    //     var first = S[i];
    //     while (i <= end) {
    //         const element = S[i];  
    //         if (element !== first) { 
    //             if (!stack.includes(element)) {
    //                 stack.push(element);
    //             } else { 
    //                 if (i === last[element]) {
    //                     stack.splice(stack.indexOf(element), 1); 
    //                     if (stack.length > 0) { 
    //                         // if (i === last[first]) { 
    //                         //     end = stack[]
    //                         // }
    //                         end = last[stack[0]]
    //                     } else if (stack.length === 0){ 
    //                         result.push(end - i + 1);
    //                     }
    //                 }
    //             }
    //         } 
    //         console.log('stack: ', stack);
    //         i++;
    //     } 
    //     i++;
    // }
};

var sentence = "ababcbacadefegdehijhklij"; 
partitionLabels(sentence);
console.log(partitionLabelsSecond(sentence));