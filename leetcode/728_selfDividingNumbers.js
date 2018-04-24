var selfDividingNumbers = function(left, right) {
    var total = [];
    while (left <= right) {
        if (left <= 9) {
            total.push(left);
        } else {
            var num = left
            var flag = false;
            while (num > 0) {
                if (num % 10 === 0 || left % (num % 10) !== 0) { 
                    flag = false;
                    break;
                } else {
                    flag = true;
                }
                num = Math.floor(num / 10);
            }
            if (flag) {
                total.push(left);
            }
        }
        left++;
        // console.log('left: ', left);

    }  
    return total; 
};

var test = selfDividingNumbers(1, 22);
console.log(test);
