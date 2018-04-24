/**
 * @param {string} S
 * @return {string[]}
 */
var isLetter = function(char) { 
    return (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
}
var letterCasePermutation = function (S) {
    if (S === null) return [];

    var queue = [];
    queue.push(S);

    for (var i = 0; i < S.length; i++) { 
        if (isLetter(S[i])) { 
            var size = queue.length;
            for (var j = 0; j < size; j++) {
                var current = queue.shift();
                var chars = current.split('');
                chars[i] = chars[i].toUpperCase();
                queue.push(chars.join(''));
                chars[i] = chars[i].toLowerCase();
                queue.push(chars.join(''));
            }
        }
    }
    return queue;
};
var test = "a1b2"
var out = letterCasePermutation(test)
console.log(out)


/* 
public List<String> letterCasePermutation(String S) {
        LinkedList<String> r = new LinkedList<>();
        r.add(S);
        for (int i = 0; i < S.length(); i++) {
            char c = S.charAt(i);
            if (Character.isLetter(c))
                for (int size = r.size(); size > 0; size--) {
                    String s = r.poll(), left = s.substring(0, i), right = s.substring(i + 1);
                    r.add(left + Character.toLowerCase(c) + right);
                    r.add(left + Character.toUpperCase(c) + right);
                }
        }
        return r;
    }

    */