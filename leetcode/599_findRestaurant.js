/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (nums1, nums2) {
    const map = {};
    var res = -1
    var arr = []

    nums1.forEach((num, index) => {
        if (map[num] === undefined) {
            map[num] = {'count': 1, 'index': index};
        } else {
            map[num]['count']++;
        }
    });
    // console.log('map: ', map);

    nums2.forEach((num, index) => {
        if (map.hasOwnProperty(num) && map[num]['count'] > 0) {
            // console.log('current element in list2:', num, 'at: ', index); 
            // console.log('in map: ', map[num])
            if (res > (index + map[num]['index']) || res === -1) {
                res = (index + map[num]['index']); 
                arr.pop();
                arr.push(num);
                map[num]['count']--;
            } else if (res === (index + map[num]['index'])) {
                arr.push(num);
            }
            // console.log('-------');
            // console.log(res);
            
        }
    });
    return arr;
    
};

console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]))
console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Burger King", "Tapioca Express", "Shogun"]))