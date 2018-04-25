/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    var hash = {}; 

    for (var i = 0; i < s.length; i++) {
        if (hash.hasOwnProperty(s[i])) hash[s[i]]++;
        else hash[s[i]] = 1;
    }
    console.log('hash:', hash);
    var allEven = 0; 
    var found = false;
    for (var key in hash) {
        if (hash[key] % 2 === 0) allEven += hash[key];
        else {
            allEven += hash[key] - 1; 
            found = true;
        };
    }
    // console.log('even: ', allEven)

    return found ? allEven + 1 : allEven;
};  
// console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"))