/**
 * @param {number[][]} people
 * @return {number[][]}
    Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.
    Note:
    The number of people is less than 1,100.
 */
var reconstructQueue = function (people) {

    // brute force
    // sort the people by height in descending order 
    // insert each element in result array by number of people it has in front of it. 
    people = people.sort(function (a, b) { 
        if (a[0] === b[0]) { 
            console.log(b[0], ':', a[0])
            return a[1] - b[1]
        } else if (a[0] > b[0]) { 
            return -1;
        } else { 
            return 1;
        }
    });
    
    var res = [];
    for (var i = 0; i < people.length; i++) { 
        res.splice(people[i][1], 0, people[i])    
    }
    return res;

};
var input = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]
input = [[9, 0], [7, 0], [1, 9], [3, 0], [2, 7], [5, 3], [6, 0], [3, 4], [6, 2], [5, 2]]
reconstructQueue(input);
console.log([[3, 0], [6, 0], [7, 0], [5, 2], [3, 4], [5, 3], [6, 2], [2, 7], [9, 0], [1, 9]])