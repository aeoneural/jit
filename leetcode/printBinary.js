var printBinary = (digits, prefix = '') => { 
    if (digits === 0) { 
        console.log(prefix);
    } else { 
        printBinary(digits - 1, prefix + '0');
        printBinary(digits - 1, prefix + '1');
    }
}

printBinary(4);
printBinary(6);