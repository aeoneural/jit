/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.hMap = {}
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.hMap[key] = val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    var res = 0;
    var len = prefix.length
    for (var key in this.hMap) {
        console.log(key) 
        console.log(key.slice(0, len ))
        if (key.slice(0, len) === prefix) { 
            res += this.hMap[key]
        }
    }
    return res;
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

 var test = new MapSum();
test.insert("apple", 3)
console.log(test);
console.log(test.sum('ap'))
