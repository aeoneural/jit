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
var findMode = function (root) {
    if (!root) return []
    var map = {};
    var prev = undefined;
    var cur = undefined;
    var maxFreq = 1;
    var in_order = (root, map) =>{ 
        if (!root) return;
        in_order(root.left, map);
        if (map.hasOwnProperty(root.val)) {
            map[root.val]++;
        } else {
            map[root.val] = 1;
        }
        maxFreq = Math.max(maxFreq, map[root.val]);
        in_order(root.right, map);
    }
    in_order(root, map);
    // console.log('freq: ', maxFreq)
    var res = [];
    for (var key in map) { 
        if (map[key] === maxFreq) { 
            res.push(key + '');
        }
    }
    return res;
    // var arr = Object.keys(map).sort((a, b) => { return map[b] - map[a] })
    // var res = [arr[0]];
    // var index = 1; 
    // while (index < arr.length) { 
    //     if (map[arr[index]] === map[arr[0]]) {
    //         res.push(arr[index])
    //     } else {
    //         break;
    //     }
    //     index++;
    // }
    // return res;
    
};
var a = { 
    val : 1, 
    left: null, 
    right: {
        val: 5, 
        left: { 
            val: 5, 
            left: null,
            right: null
        }, 
        right: {
            val: 8, 
            left: {
                val: 8, 
                left: null, 
                right: null
            }, 
            right: null
        }
    }
}
var k = findMode(a)
console.log(k)