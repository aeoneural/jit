/**
 * 
 * @param {string} pattern
 * @param {number} m 
 * @param {string} lps
 */
var computeLPSArray = (pat, m, lps) => { 
    console.log('Computing lps array')
    var len = 0; // len of the previos longest prefix suffix 

    // lps[0] = 0
    var i = 1; 

    // the loop calculates lps[i] for i = 1 to m - 1; 
    while (i < m) { 
        if (pat[i] === pat[len]) { 
            len += 1; 
            lps[i] = len; 
            i += 1; 
        } else { 
            // this is tricky. 
            if (len !== 0) { 
                len = lps[len - 1]; 
            } else { 
                lps[i] = 0; 
                i += 1; 
            }
        }
    }
}
/**
 * Date 03/14/2018
 * @author Aygerim
 * @references: geeksforgeeks, Tushar Roy 
 * 
 * Pattern matching using Knuth Morris Pratt algorithm
 * 
 * Strategy: 
 * Finding Longest Prefix table or partial match table: 
 * Length of the longest proper prefix in pattern that matches a proper suffix in the same pattern 
 * 
 * Runtime Complexity: O(m + n)
 *                      m - length of pattern
 *                      n - length of text 
 * 
 * Space Complexity: O(n)
 * 
 * @param {*} pattern 
 * @param {*} text 
 */
var KMPSearch = (pat, txt) => { 
    console.log('started ')
    var m = pat.length; 
    var n = txt.length; 

    // create lps[] that will hold the longest prefix suffix values for pattern 

    var lps = []; 
    for (var i = 0; i < m; i++) { 
        lps[i] = 0;
    }
    var j = 0 // for pat

    // preprocess the pattern 
    computeLPSArray(pat, m, lps); 
    console.log('lps array', lps);

    var i = 0; // for text
    while (i < n) { 
        if (pat[j] === txt[i]) { 
            i++; 
            j++;
        }
        if (j === m) { 
            console.log('pattern found at index: ',i - j); 
            j = lps[j - 1];
        } 
        // mismatch after j matches 
        else if (i < n && pat[j] !== txt[i]) { 
            // do not match lps[0 ... lps[j-1]] characters, they will match anyway.
            if (j !== 0) {
                j = lps[j - 1];
            } else { 
                i += 1;
            }
        }
    }
}

var txt = "ABABDABACDABABCABAB"
var pat = "ABABCABAB"
KMPSearch(pat, txt)
