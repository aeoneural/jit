var cB = function(n) { 
    return n === 0 ? 0 : n & 1 + cB(n>>1);
}