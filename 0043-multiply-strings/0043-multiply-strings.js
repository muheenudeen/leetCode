/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {

    const nums1=BigInt(num1)
    const nums2=BigInt(num2)

    const multi= nums1*nums2
    return multi.toString()
    
};