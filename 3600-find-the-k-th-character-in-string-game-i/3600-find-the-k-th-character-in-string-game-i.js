/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let a=[0];
    while (a.length <k){

        const next =a.map((e)=>(e+1)% 26)
        a= [...a, ...next];
    }
    return String.fromCharCode(97 +a[k - 1])
};