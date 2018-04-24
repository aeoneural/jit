/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/* 
Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character but a character may map to itself.

input: "egg", "add"
transformation: 

scan first string from the beginning 
store index of first occurrence of each char in a table
create new array of key of each char 

do the same for second string separetedly 

compare two new array of keys. 


*/
var isIsomorphic = function (s, t) {
    var table = {}; 

    for (var i = 0; i < s.length; i++) { 
        if (!table.hasOwnProperty(s[i])) { 
            table[s[i]] = t[i];
        } else { 
            if (table[s[i]] !== t[i]) {
                console.log('false')
                return false;
            }
        }
        
    }
    console.log(table);
    return true; 
};
var a = isIsomorphic('ab', 'bb');
console.log(a);