var steps = (totalStep) => { 
    
    var possibleSteps = [1,2,4];
    if (totalStep < 4) {
        return possibleSteps[totalStep - 1];
    }
    for (var i = 3; i < totalStep; i++) { 
        var temp = possibleSteps[0] + possibleSteps[1] + possibleSteps[2];
        possibleSteps[0] = possibleSteps[1]
        possibleSteps[1] = possibleSteps[2]
        possibleSteps[2] = temp;
    }
    return possibleSteps[2];
}

// for (var i = 1; i < 10; i++) { 
//     console.log(i, ':',steps(i));
// }