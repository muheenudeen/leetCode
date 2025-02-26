/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s === "") { return true; }
    const sLen = s.length;
    const tLen = t.length;
    let i = 0;
    let j = 0;
    
    while (i < sLen && j < tLen) {
        if (s[i] === t[j]) { i++; }
        j++;
    }
    return i === sLen;    
};