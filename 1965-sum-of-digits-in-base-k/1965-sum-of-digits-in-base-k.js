/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    
    const nums=n.toString(k).split("")
    return nums.reduce((ac,cur)=>ac+=Number(cur),0)
};