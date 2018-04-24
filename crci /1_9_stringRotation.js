var isRotation = (s1, s2) => { 
    var len = s1.length; 
    if (len === s1.length && len > 0) {
        var newS1 = s1 + s1;
        console.log('new string: ', newS1)
        return newS1.includes(s2);
    }
    return false;
}
console.log(isRotation('waterbottle', 'erbottlewat'))