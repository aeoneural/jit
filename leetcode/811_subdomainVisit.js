/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    var hashTable = { };
    for (var i = 0; i < cpdomains.length; i++) { 
        
        var subdomain = cpdomains[i].split(' ');
        var num = Number(subdomain[0]);
        var domain = subdomain[1];
        var sub = domain.split('.');     
        var word = ''
        for (var j = sub.length - 1; j > -1; j--) { 
            if (j === sub.length - 1) { 
                word += sub[j]
            } else { 
                word = sub[j] + '.' + word;
            }
            
            if (hashTable.hasOwnProperty(word)){ 
                hashTable[word] += num;
            } else { 
                hashTable[word] = num;
            }
        }
    }
    // console.log('hashtable: ', hashTable);
    var result = []
    for (var key in hashTable) { 
        result.push((hashTable[key]) + ' ' + key)
    }
    return result;
    
};

var test = ["9001 discuss.leetcode.com"]
test = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]

console.log(subdomainVisits(test));