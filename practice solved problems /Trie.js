var trie = function() { 
    this.rootNode = {};

}
trie.prototype.addWord = function(word) { 

    let currentNode = this.rootNode; 
    let isNewWord = false; 

    // work downwards through the trie, adding nodes as needed, 
    // and keeping track of whether we add any nodes 
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.hasOwnProperty(char)) { 
            isNewWord = true; 
            currentNode[char] = {};
        }
        console.log('currentNode: ', currentNode);
        currentNode = currentNode[char];
    }

    // explicitly mark the end of a word. Otherwise, we might say a word is present if it is a prefix of a different longer word that was added earlier. 

    if (!currentNode.hasOwnProperty('End of Word')) {
        isNewWord = true; 
        currentNode['End of Word'] = [];
    }
    return isNewWord;
}

var test = new trie()
test.addWord('aikona');

console.log(test);

test.addWord('abi');
console.log(test);
test.addWord('abo');
console.log(test);