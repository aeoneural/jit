
var isOpenParan = function(paran) { 
    return paran === "{" || paran === "[" || paran === "(";
}
var validParanthesis = function(str) { 
    var parMap = {']':'[', '}': '{', ')' : '('}; 
    var stack = [];
    
    var stack = []
    for (var i = 0; i < str.length; i++) { 
        if (isOpenParan(str[i])) { 
            stack.push(str[i]);
        } else { 
            var last = stack.pop();
            if (parMap[str[i]] !== last) { 
                return false;
            }
        }
    }
    return true;

}

var test = '([{]})'
console.log(validParanthesis(test));