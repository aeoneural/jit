var permute = function(str){ 
    return permuteHelper(str, '')
}
var permuteHelper = function(str, chosen) { 
    console.log(chosen)
    if (str.length === 0) { 
        console.log(chosen);
    } else { 
        for (var i = 0; i < str.length; i++) { 
            var char = str[i];
            chosen += char; 
            var newstr = str.substring(0, i) + str.substring(i+1)
            permuteHelper(newstr, chosen);
            chosen = chosen.substring(0, chosen.length - 1);
            // console.log('backtrack:', chosen)
        }
    }
}
permute('abc')