/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
    var freqMap = new Map();
    var insertToMap = (val, hMap) => { 
        if (hMap.has(val) === false) { 
            hMap.set(val, 1);
        } else { 
            hMap.set(val, hMap.get(val) + 1);
        }
    }
    var rec = (root, res) => { 
        if (!root) return 0; 
        // if (root.left === null && root.right === null) return root.val;
        var left = rec(root.left, res);
        var right = rec(root.right, res);
        var sum = left + right + root.val;
        // console.log('left: ', left);
        // console.log('right: ', right);
        // console.log('sum: ', sum)
        // console.log('------------');
        insertToMap(sum, res);
        return sum;
    } 
    rec(root, freqMap);
    var max = 0;
    var count = 0
    for (var key of freqMap.keys()) {    
        if (freqMap.get(key) > max) { 
            max = freqMap.get(key)
        }
    }
    console.log(freqMap);
    console.log(max);
    var res = []
    for (var key of freqMap.keys()) {
        if (freqMap.get(key) === max) { 
            res.push(key);
        }
    }
    return res;
    // console.log(freqMap)
    // console.log(count)
    // console.log([...freqMap.keys()].length)
    // if (count === Object.keys(freqMap).length) {
    //     return [...freqMap.keys()]
    // }
    // // console.log([...freqMap.keys()]);
    // return [max];
};
var tree = { 
    val: 1, 
    left: { 
        val: 2, 
        left: null, 
        right: { 
            val: 1, 
            left: null, 
            right: null
        }
    }, 
    right: { 
        val: 3, 
        left: null, 
        right: null
    }
}
tree = { 
    val: 5, 
    left: { 
        val: 2, 
        left: null, 
        right: null
    }, 
    right: {
        val: -3,
        left: null,
        right: null
    }
}
// console.log(tree);
var test = findFrequentTreeSum(tree);
console.log(test);