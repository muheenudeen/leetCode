/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let i=1
    let pref=strs[0]
    while (i<strs.length) {
        if(!strs[i].startsWith(pref)) {
            pref = pref.slice(0, -1)
        }else{
            i++
        }
    }
    return pref
};