var node = { 
    key: null, 
    value: null, 
    children: []
}

var Trie = function() { 
    this.head = { 
        key: '', 
        children: {}
    }
}

Trie.prototype.add = function(key) { 
    var curNode = this.head, 
        newNode = null,
        curChar = key.slice(0, 1);
    key = key.slice(1);
    while (typeof curNode.children[curChar] !== undefined && curChar.length > 0) { 
        curNode = curNode.children[curChar];
        curChar = key.slice(0, 1);
        key = key.slice(1);
    }

    while (curChar.length > 0) { 
        newNode = { 
            key : curChar, 
            value: key.length === 0 ? null : undefined, 
            children : {}
        }
        curNode.children[curChar] = newNode;
        curNode = newNode;
        curChar = key.slice(0, 1);
        key = key.slice(1);
    }
}

var a = new Trie()
console.log(a)