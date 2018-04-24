var printAllPaths = (root, sum) => { 
    var all = [];
    var each = [];
    var rec = function(root, sum) { 
        if (root) { 
            if (!root.left && !root.right) { 
                if (root.val === sum) { 
                    each.push(root.val);
                    all.push(each.slice());
                    each.pop();
                    return; 
                } 
            } else {
                each.push(root.val);
                rec(root.left, sum - root.val, each, all); 
                rec(root.right, sum - root.val, each, all);
                each.pop();
            }
        }
    }

    rec(root, sum)
    return all;
}
var mainPrintAll = (root) => { 
    if (!root) return; 
    mainPrintAll(root.left);
    var all = printAllPaths(root, root.val);
    console.log('sum: ', root.val, '---> ', all);
    mainPrintAll(root.right);
}

var tree = {
    val: 3,
    left: {
        val: 6,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 2,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 4,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 1,
        left: {
            val: 0,
            left: null,
            right: null
        },
        right: {
            val: 8,
            left: null,
            right: null
        }
    }
}

var test = [14, 17, 12]
// for (var i = 0; i < test.length; i++) { 
//     console.log(printAllPaths(tree, test[i]));
// }
mainPrintAll(tree);